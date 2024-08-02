'use client'

import { FC } from 'react'
import Button from '@components/Button/Button'
import Image from 'next/image'
import LOGOUT from '@public/logout.svg'
import COURIER_BIKE from '@public/courier-bike.svg'
import { useRouter } from 'next/navigation'
import { COURIER_CURRENT_ORDER, LOGIN } from '@utils/links'
import { logoutReq } from '@api/services/authService'
import useAuthStore from '@store/authStore'

type dashboardButton = {
    title: string
    link: string
}

const dashboardButtons: dashboardButton[] = [
    {
        title: 'درخواست فعال',
        link: COURIER_CURRENT_ORDER,
    },
]

const CourierDashboard: FC = () => {
    const { logout } = useAuthStore()
    const router = useRouter()

    const handleLink = (link: string) => () => {
        router.push(link)
    }

    const handleLogout = async () => {
        const res = await logoutReq()
        if (res.isSuccess) {
            logout()
            router.push(LOGIN)
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-xl text-center font-medium mt-6 mb-10">داشبورد</h1>
            <div className="flex flex-col w-full">
                {dashboardButtons.map((button, index) => (
                    <Button key={index} variant="secondary" className="mb-6" onClick={handleLink(button.link)}>
                        <div className="flex items-center justify-center">{button.title}</div>
                    </Button>
                ))}
                <Button variant="outline" onClick={handleLogout}>
                    <div className="flex items-center justify-center">
                        <Image src={LOGOUT} alt="logput" className="ml-1" />
                        خروج
                    </div>
                </Button>
            </div>
            <div className="flex flex-col justify-end h-full pb-6">
                <Image src={COURIER_BIKE} alt="bike" className="mt-6" />
            </div>
        </div>
    )
}

export default CourierDashboard
