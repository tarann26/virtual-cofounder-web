import { useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/api/supabase'

interface AuthState {
  user: User | null
  session: Session | null
  isLoading: boolean
  error: Error | null
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Get initial session with error handling
    supabase.auth
      .getSession()
      .then(({ data: { session }, error }) => {
        if (error) {
          console.error('Failed to get session:', error)
          setError(error)
        } else {
          setSession(session)
          setUser(session?.user ?? null)
        }
      })
      .catch((err) => {
        // Handle network errors or other unexpected failures
        console.error('Auth initialization failed:', err)
        setError(err instanceof Error ? err : new Error('Failed to initialize auth'))
      })
      .finally(() => {
        setIsLoading(false)
      })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      // Clear any previous errors on successful auth change
      setError(null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, session, isLoading, error }
}
