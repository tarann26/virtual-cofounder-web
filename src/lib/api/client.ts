import { env } from '@/lib/env'
import { supabase } from './supabase'

const DEFAULT_TIMEOUT = 30000 // 30 seconds

class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async getAuthHeaders(): Promise<HeadersInit> {
    const { data: { session } } = await supabase.auth.getSession()
    const token = session?.access_token

    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type')

    // Handle empty responses (204 No Content, etc.)
    const text = await response.text()
    if (!text) {
      return null as T
    }

    // Only parse as JSON if content-type indicates JSON
    if (contentType?.includes('application/json')) {
      try {
        return JSON.parse(text)
      } catch {
        console.error('Failed to parse JSON response:', text.substring(0, 200))
        throw new ApiError('Invalid response format', response.status, 'Parse Error')
      }
    }

    // Return text for non-JSON responses
    return text as unknown as T
  }

  private async handleError(response: Response): Promise<never> {
    let userMessage = 'An error occurred. Please try again.'

    try {
      const contentType = response.headers.get('content-type')
      if (contentType?.includes('application/json')) {
        const errorData = await response.json()
        userMessage = errorData.message || errorData.error || userMessage
        console.error('API Error:', response.status, errorData)
      } else {
        console.error('API Error:', response.status, response.statusText)
      }
    } catch {
      console.error('API Error:', response.status, response.statusText)
    }

    throw new ApiError(userMessage, response.status, response.statusText)
  }

  private createAbortController(timeout: number): { controller: AbortController; timeoutId: NodeJS.Timeout } {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)
    return { controller, timeoutId }
  }

  async get<T>(endpoint: string, timeout = DEFAULT_TIMEOUT): Promise<T> {
    const headers = await this.getAuthHeaders()
    const { controller, timeoutId } = this.createAbortController(timeout)

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers,
        signal: controller.signal,
      })

      if (!response.ok) {
        await this.handleError(response)
      }

      return this.parseResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timed out', 0, 'Timeout')
      }
      throw error
    } finally {
      clearTimeout(timeoutId)
    }
  }

  async post<T>(endpoint: string, body?: unknown, timeout = DEFAULT_TIMEOUT): Promise<T> {
    const headers = await this.getAuthHeaders()
    const { controller, timeoutId } = this.createAbortController(timeout)

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      if (!response.ok) {
        await this.handleError(response)
      }

      return this.parseResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timed out', 0, 'Timeout')
      }
      throw error
    } finally {
      clearTimeout(timeoutId)
    }
  }

  async put<T>(endpoint: string, body?: unknown, timeout = DEFAULT_TIMEOUT): Promise<T> {
    const headers = await this.getAuthHeaders()
    const { controller, timeoutId } = this.createAbortController(timeout)

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'PUT',
        headers,
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      if (!response.ok) {
        await this.handleError(response)
      }

      return this.parseResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timed out', 0, 'Timeout')
      }
      throw error
    } finally {
      clearTimeout(timeoutId)
    }
  }

  async delete<T>(endpoint: string, timeout = DEFAULT_TIMEOUT): Promise<T> {
    const headers = await this.getAuthHeaders()
    const { controller, timeoutId } = this.createAbortController(timeout)

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers,
        signal: controller.signal,
      })

      if (!response.ok) {
        await this.handleError(response)
      }

      return this.parseResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timed out', 0, 'Timeout')
      }
      throw error
    } finally {
      clearTimeout(timeoutId)
    }
  }
}

export const apiClient = new ApiClient(env.apiUrl)
export { ApiError }
