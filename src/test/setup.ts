import '@testing-library/jest-dom'

// Mock localStorage for Zustand persist
const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  length: 0,
  key: () => null,
}

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
})
