/*
  # Initial Schema Setup for Aidra Platform

  1. Authentication
    - Using Supabase built-in auth.users

  2. New Tables
    - users_metadata (extends auth.users)
      - Additional user information
      - Preferences and settings
    - help_articles
      - Documentation and help content
    - api_keys
      - API access management
    
  3. Security
    - RLS policies for each table
    - Secure API key management
*/

-- Users metadata table
CREATE TABLE IF NOT EXISTS users_metadata (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  company_name text,
  role text,
  preferences jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users_metadata ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own metadata"
  ON users_metadata
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own metadata"
  ON users_metadata
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Help articles table
CREATE TABLE IF NOT EXISTS help_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  slug text UNIQUE NOT NULL,
  published boolean DEFAULT false,
  author_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE help_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published help articles"
  ON help_articles
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authors can manage their articles"
  ON help_articles
  FOR ALL
  TO authenticated
  USING (author_id = auth.uid());

-- API keys table
CREATE TABLE IF NOT EXISTS api_keys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  key_hash text NOT NULL,
  last_used_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE api_keys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their API keys"
  ON api_keys
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_help_articles_slug ON help_articles(slug);
CREATE INDEX IF NOT EXISTS idx_help_articles_category ON help_articles(category);
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON api_keys(user_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_users_metadata_updated_at
  BEFORE UPDATE ON users_metadata
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_help_articles_updated_at
  BEFORE UPDATE ON help_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();