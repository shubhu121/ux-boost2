/*
  # Fix audit requests insert policy for anonymous users

  1. Security Changes
    - Drop existing INSERT policy for anonymous users
    - Create new INSERT policy that explicitly allows anonymous users to insert audit requests
    - Ensure the policy has proper WITH CHECK condition

  This migration fixes the RLS policy that was preventing anonymous users from submitting audit requests.
*/

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Anyone can submit audit requests" ON audit_requests;

-- Create a new policy that allows anonymous users to insert audit requests
CREATE POLICY "Allow anonymous users to submit audit requests"
  ON audit_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);