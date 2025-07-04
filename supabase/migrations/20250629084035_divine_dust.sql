/*
  # Create audit requests table

  1. New Tables
    - `audit_requests`
      - `id` (uuid, primary key)
      - `name` (text, required) - Customer name
      - `email` (text, required) - Customer email
      - `company` (text, optional) - Company/startup name
      - `website` (text, required) - Product URL to audit
      - `user_type` (text, required) - Description of primary users
      - `goal` (text, required) - Main conversion goal
      - `plan` (text, required) - Selected pricing plan
      - `status` (text, default 'pending') - Request status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `audit_requests` table
    - Add policy for public insert (form submissions)
    - Add policy for authenticated admin access
*/

CREATE TABLE IF NOT EXISTS audit_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  website text NOT NULL,
  user_type text NOT NULL,
  goal text NOT NULL,
  plan text NOT NULL CHECK (plan IN ('starter', 'growth', 'founder')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;

-- Allow public to insert audit requests (form submissions)
CREATE POLICY "Anyone can submit audit requests"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all audit requests (for admin dashboard)
CREATE POLICY "Authenticated users can read audit requests"
  ON audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update audit requests (for admin management)
CREATE POLICY "Authenticated users can update audit requests"
  ON audit_requests
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_audit_requests_created_at ON audit_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_requests_status ON audit_requests(status);
CREATE INDEX IF NOT EXISTS idx_audit_requests_email ON audit_requests(email);