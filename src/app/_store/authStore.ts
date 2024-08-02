import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
    token: string | null
    role: string | null
    isLoggedIn: boolean
    setToken: (token: string) => void
    setRole: (role: string) => void
    logout: () => void
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            role: null,
            isLoggedIn: false,
            setToken: (token: string) => {
                localStorage.setItem('token', token)
                set({ token, isLoggedIn: !!token })
            },
            setRole: (role: string) => {
                localStorage.setItem('role', role)
                set({ role })
            },
            logout: () => {
                localStorage.removeItem('auth-storage')
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                set({ token: null, role: null, isLoggedIn: false })
            },
        }),
        {
            name: 'auth-storage',
            getStorage: () => localStorage,
        }
    )
)

export default useAuthStore
