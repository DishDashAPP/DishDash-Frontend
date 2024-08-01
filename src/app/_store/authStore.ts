import create from 'zustand';
import {persist} from 'zustand/middleware';

interface AuthState {
    token: string | null;
    role: string | null;
    isLoggedIn: boolean;
    setToken: (token: string) => void;
    setRole: (role: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            role: null,
            isLoggedIn: false,
            setToken: (token: string) => set({token, isLoggedIn: !!token}),
            setRole: (role: string) => set({role}),
            logout: () => set({token: null, role: null, isLoggedIn: false}),
        }),
        {
            name: 'auth-storage', // name of the storage item
            getStorage: () => localStorage, // use localStorage
        }
    )
);

export default useAuthStore;
