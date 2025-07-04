/*
  # Create Twitter cache table

  1. New Tables
    - `twitter_cache`
      - `id` (uuid, primary key)
      - `query` (text) - The search query used
      - `tweets` (jsonb) - Cached tweet data
      - `last_fetched_at` (timestamp) - When tweets were last fetched from Twitter API
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `twitter_cache` table
    - Add policy for public read access (for displaying tweets)
    - Add policy for service role write access (for edge function updates)
*/

CREATE TABLE IF NOT EXISTS twitter_cache (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL UNIQUE,
  tweets jsonb NOT NULL DEFAULT '[]'::jsonb,
  last_fetched_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE twitter_cache ENABLE ROW LEVEL SECURITY;

-- Allow public to read cached tweets
CREATE POLICY "Anyone can read cached tweets"
  ON twitter_cache
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow service role to insert/update cache (for edge functions)
CREATE POLICY "Service role can manage cache"
  ON twitter_cache
  FOR ALL
  TO service_role
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_twitter_cache_query ON twitter_cache(query);
CREATE INDEX IF NOT EXISTS idx_twitter_cache_last_fetched ON twitter_cache(last_fetched_at DESC);