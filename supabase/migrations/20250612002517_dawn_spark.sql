/*
  # Create tasks table

  1. New Tables
    - `tasks`
      - `id` (uuid, primary key)
      - `title` (text) - task title
      - `description` (text) - detailed task description
      - `category` (text) - task category
      - `budget` (numeric) - suggested budget
      - `date` (date, optional) - preferred date
      - `is_flexible` (boolean) - flexible with dates
      - `state` (text) - Brazilian state
      - `city` (text) - city name
      - `neighborhood` (text) - neighborhood
      - `latitude` (numeric, optional) - GPS coordinates
      - `longitude` (numeric, optional) - GPS coordinates
      - `images` (text array) - array of image URLs
      - `status` (text) - task status
      - `posted_by` (uuid) - user who posted the task
      - `posted_by_name` (text) - cached name for performance
      - `assigned_to` (uuid, optional) - assigned tasker
      - `created_at` (timestamptz) - creation timestamp
      - `updated_at` (timestamptz) - last update timestamp

  2. Security
    - Enable RLS on `tasks` table
    - Add policy for public read access to open tasks
    - Add policy for task owners to manage their tasks
    - Add policy for authenticated users to create tasks
*/

CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  budget numeric(10,2) NOT NULL,
  date date,
  is_flexible boolean DEFAULT false,
  state text NOT NULL,
  city text NOT NULL,
  neighborhood text NOT NULL,
  latitude numeric(10,8),
  longitude numeric(11,8),
  images text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'assigned', 'completed', 'cancelled')),
  posted_by uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  posted_by_name text NOT NULL,
  assigned_to uuid REFERENCES users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to open tasks
CREATE POLICY "Public can read open tasks"
  ON tasks
  FOR SELECT
  TO public
  USING (status = 'open');

-- Policy for task owners to manage their tasks
CREATE POLICY "Task owners can manage their tasks"
  ON tasks
  FOR ALL
  TO authenticated
  USING (posted_by = auth.uid());

-- Policy for authenticated users to create tasks
CREATE POLICY "Authenticated users can create tasks"
  ON tasks
  FOR INSERT
  TO authenticated
  WITH CHECK (posted_by = auth.uid());

-- Policy for assigned taskers to read their assigned tasks
CREATE POLICY "Assigned taskers can read their tasks"
  ON tasks
  FOR SELECT
  TO authenticated
  USING (assigned_to = auth.uid());

-- Trigger to automatically update updated_at
CREATE TRIGGER update_tasks_updated_at
  BEFORE UPDATE ON tasks
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_category ON tasks(category);
CREATE INDEX IF NOT EXISTS idx_tasks_location ON tasks(state, city);
CREATE INDEX IF NOT EXISTS idx_tasks_posted_by ON tasks(posted_by);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at DESC);