'use client'

import { FC } from 'react'
import { UserType } from '@utils/types'
import LOGO from '../../../../public/logo.svg'
import Image from 'next/image'
import ARROW_BACK from '../../../../public/arrow-back.svg'
import SHOPPING_CART from '../../../../public/shopping-cart.svg'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { SHOPPING_CARTS } from '@utils/links'

type HeaderProps = {
    userType: UserType
}

const Header: FC<HeaderProps> = ({ userType }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleBackClick = () => {
        router.back()
    }

    const dashboardRoute = {
        CUSTOMER: '/customer',
        RESTAURANT_OWNER: '/restaurants',
        DELIVERY_PERSON: '/courier',
    }[userType]

    const isDashboard = pathname === dashboardRoute
    const isCustomer = userType === 'CUSTOMER'

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow fixed inset-x-0 top-0 mx-auto w-full max-w-lg z-10">
            <div>
                {!isDashboard && (
                    <Image
                        src={ARROW_BACK}
                        onClick={handleBackClick}
                        className="cursor-pointer"
                        alt="back"
                        width={24}
                        height={24}
                    />
                )}
            </div>
            <div className="flex items-center">
                {isCustomer && (
                    <Link href={SHOPPING_CARTS} passHref>
                        <Image src={SHOPPING_CART} width={24} height={24} className="ml-6" alt="shopping cart" />
                    </Link>
                )}
                <Link href={dashboardRoute} passHref>
                    <Image src={LOGO} width={24} height={24} alt="logo" />
                </Link>
            </div>
        </div>
    )
}

export default Header
