/*
  # Create users table

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - matches Supabase auth.users id
      - `name` (text) - user's full name
      - `email` (text, unique) - user's email address
      - `phone` (text) - user's phone number
      - `user_type` (text) - either 'client' or 'tasker'
      - `avatar_url` (text, optional) - profile picture URL
      - `rating` (numeric, optional) - average rating from reviews
      - `completed_tasks` (integer) - number of completed tasks
      - `is_verified` (boolean) - email verification status
      - `last_active` (timestamptz) - last login/activity timestamp
      - `created_at` (timestamptz) - account creation timestamp
      - `updated_at` (timestamptz) - last profile update timestamp

  2. Security
    - Enable RLS on `users` table
    - Add policy for users to read their own data
    - Add policy for users to update their own data
    - Add policy for public read access to basic profile info
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  user_type text NOT NULL CHECK (user_type IN ('client', 'tasker')),
  avatar_url text,
  rating numeric(3,2) DEFAULT 0,
  completed_tasks integer DEFAULT 0,
  is_verified boolean DEFAULT false,
  last_active timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy for users to read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Policy for users to update their own data
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Policy for public read access to basic profile info (for task listings)
CREATE POLICY "Public can read basic profile info"
  ON users
  FOR SELECT
  TO public
  USING (true);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();