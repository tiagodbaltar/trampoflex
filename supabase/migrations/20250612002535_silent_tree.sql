/*
  # Create reviews table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `task_id` (uuid) - reference to completed task
      - `reviewer_id` (uuid) - user giving the review
      - `reviewee_id` (uuid) - user being reviewed
      - `rating` (integer) - rating from 1-5
      - `comment` (text, optional) - review comment
      - `created_at` (timestamptz) - creation timestamp

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access to reviews
    - Add policy for task participants to create reviews
    - Prevent duplicate reviews for the same task
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id uuid NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  reviewer_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reviewee_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(task_id, reviewer_id, reviewee_id)
);

-- Enable RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to reviews
CREATE POLICY "Public can read reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (true);

-- Policy for task participants to create reviews
CREATE POLICY "Task participants can create reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (
    reviewer_id = auth.uid() AND
    task_id IN (
      SELECT id FROM tasks 
      WHERE (posted_by = auth.uid() OR assigned_to = auth.uid())
      AND status = 'completed'
    )
  );

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_reviews_reviewee_id ON reviews(reviewee_id);
CREATE INDEX IF NOT EXISTS idx_reviews_task_id ON reviews(task_id);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at DESC);

-- Function to update user rating when a new review is added
CREATE OR REPLACE FUNCTION update_user_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE users 
  SET rating = (
    SELECT ROUND(AVG(rating), 2)
    FROM reviews 
    WHERE reviewee_id = NEW.reviewee_id
  )
  WHERE id = NEW.reviewee_id;
  
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update user rating
CREATE TRIGGER update_user_rating_trigger
  AFTER INSERT ON reviews
  FOR EACH ROW
  EXECUTE FUNCTION update_user_rating();