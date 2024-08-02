'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@store/authStore'
import { CUSTOMER, RESTAURANT, COURIER, LOGIN } from '@utils/links'

export default function Home() {
    const router = useRouter()
    const { token, role } = useAuthStore()

    useEffect(() => {
        if (!token) {
            router.push(LOGIN)
        } else {
            switch (role) {
                case 'CUSTOMER':
                    router.push(CUSTOMER)
                    break
                case 'RESTAURANT_OWNER':
                    router.push(RESTAURANT)
                    break
                case 'DELIVERY_PERSON':
                    router.push(COURIER)
                    break
                default:
                    router.push(LOGIN)
            }
        }
    }, [token, role, router])

    return <h1 className="flex items-center justify-center text-6xl h-[100vh] font-bold">دیش‌دش</h1>
}
