export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  apiUrl: import.meta.env.VITE_API_URL as string || 'http://localhost:8000',
} as const

// Validate required env vars in development
if (import.meta.env.DEV) {
  const missing = Object.entries(env)
    .filter(([key, value]) => !value && key !== 'apiUrl')
    .map(([key]) => key)

  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`)
  }
}
