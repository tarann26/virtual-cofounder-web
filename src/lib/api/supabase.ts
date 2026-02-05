import { createClient } from '@supabase/supabase-js'
import { env } from '@/lib/env'

// Fail fast if Supabase credentials are not configured
// This prevents the app from silently using invalid credentials
if (!env.supabaseUrl || !env.supabaseAnonKey) {
  throw new Error(
    'Missing Supabase configuration. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.'
  )
}

export const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey)
