/*
  # Fix RLS policies for audit_requests table

  1. Security Updates
    - Drop existing policies that might be conflicting
    - Create new comprehensive policies for audit_requests table
    - Allow anonymous users to insert audit requests
    - Allow authenticated users to read and update audit requests
    - Ensure proper access control for the application workflow

  2. Changes
    - Remove any conflicting policies
    - Add clear INSERT policy for anonymous users
    - Add SELECT and UPDATE policies for authenticated users
    - Ensure policies work with the application's authentication flow
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow anonymous users to submit audit requests" ON audit_requests;
DROP POLICY IF EXISTS "Authenticated users can read audit requests" ON audit_requests;
DROP POLICY IF EXISTS "Authenticated users can update audit requests" ON audit_requests;

-- Create new policies with explicit conditions
CREATE POLICY "Enable insert for anonymous users" ON audit_requests
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "Enable select for authenticated users" ON audit_requests
  FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Enable update for authenticated users" ON audit_requests
  FOR UPDATE 
  TO authenticated 
  USING (true)
  WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE audit_requests ENABLE ROW LEVEL SECURITY;