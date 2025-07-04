/*
  # Fix RLS policies for audit_requests table

  1. Security Updates
    - Drop existing INSERT policy for anonymous users
    - Create new INSERT policy with proper configuration
    - Ensure anonymous users can insert audit requests
    - Maintain existing SELECT and UPDATE policies for authenticated users

  2. Policy Changes
    - Allow anonymous users to insert new audit requests
    - Ensure proper RLS configuration for public form submissions
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON audit_requests;

-- Create a new INSERT policy that explicitly allows anonymous users
CREATE POLICY "Allow anonymous audit request submissions"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Ensure the existing policies are properly configured
DROP POLICY IF EXISTS "Enable select for authenticated users" ON audit_requests;
CREATE POLICY "Enable select for authenticated users"
  ON audit_requests
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Enable update for authenticated users" ON audit_requests;
CREATE POLICY "Enable update for authenticated users"
  ON audit_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);