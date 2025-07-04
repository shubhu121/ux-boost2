import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Type definition for audit request data
export interface AuditRequest {
  name: string
  email: string
  company?: string
  website: string
  user_type: string
  goal: string
  plan: 'starter' | 'growth' | 'founder'
}

// Function to insert audit request
export async function insertAuditRequest(data: AuditRequest) {
  const { error } = await supabase
    .from('audit_requests')
    .insert([data])

  if (error) throw error
}