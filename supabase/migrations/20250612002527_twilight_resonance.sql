/*
  # Create offers table

  1. New Tables
    - `offers`
      - `id` (uuid, primary key)
      - `task_id` (uuid) - reference to task
      - `tasker_id` (uuid) - user making the offer
      - `tasker_name` (text) - cached name for performance
      - `message` (text) - offer message
      - `price` (numeric) - offered price
      - `estimated_duration` (text) - estimated completion time
      - `status` (text) - offer status
      - `created_at` (timestamptz) - creation timestamp
      - `updated_at` (timestamptz) - last update timestamp

  2. Security
    - Enable RLS on `offers` table
    - Add policy for task owners to read offers on their tasks
    - Add policy for taskers to read their own offers
    - Add policy for authenticated users to create offers
    - Add policy for taskers to update their own offers
*/

CREATE TABLE IF NOT EXISTS offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id uuid NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  tasker_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tasker_name text NOT NULL,
  message text NOT NULL,
  price numeric(10,2) NOT NULL,
  estimated_duration text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(task_id, tasker_id)
);

-- Enable RLS
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;

-- Policy for task owners to read offers on their tasks
CREATE POLICY "Task owners can read offers on their tasks"
  ON offers
  FOR SELECT
  TO authenticated
  USING (
    task_id IN (
      SELECT id FROM tasks WHERE posted_by = auth.uid()
    )
  );

-- Policy for taskers to read their own offers
CREATE POLICY "Taskers can read their own offers"
  ON offers
  FOR SELECT
  TO authenticated
  USING (tasker_id = auth.uid());

-- Policy for authenticated users to create offers
CREATE POLICY "Authenticated users can create offers"
  ON offers
  FOR INSERT
  TO authenticated
  WITH CHECK (tasker_id = auth.uid());

-- Policy for taskers to update their own offers
CREATE POLICY "Taskers can update their own offers"
  ON offers
  FOR UPDATE
  TO authenticated
  USING (tasker_id = auth.uid());

-- Policy for task owners to update offer status
CREATE POLICY "Task owners can update offer status"
  ON offers
  FOR UPDATE
  TO authenticated
  USING (
    task_id IN (
      SELECT id FROM tasks WHERE posted_by = auth.uid()
    )
  );

-- Trigger to automatically update updated_at
CREATE TRIGGER update_offers_updated_at
  BEFORE UPDATE ON offers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_offers_task_id ON offers(task_id);
CREATE INDEX IF NOT EXISTS idx_offers_tasker_id ON offers(tasker_id);
CREATE INDEX IF NOT EXISTS idx_offers_status ON offers(status);
CREATE INDEX IF NOT EXISTS idx_offers_created_at ON offers(created_at DESC);