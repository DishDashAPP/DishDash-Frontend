'use client'

import { FC, useCallback } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import classJoin from '@utils/classJoin'

const TabSwitch: FC = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const isActive = searchParams.get('type') === 'active'

    return (
        <div className="rounded-xl border border-gray-card_border h-[56px] mt-6 flex p-1 relative items-center bg-gray-card_border w-full">
            <Link
                href={pathname + '?' + createQueryString('type', 'active')}
                className="w-full flex justify-center text-sm font-medium"
            >
                سفارش‌های فعال
            </Link>
            <Link
                href={pathname + '?' + createQueryString('type', 'completed')}
                className="w-full flex justify-center text-sm font-medium"
            >
                تاریخچه‌ی سفارش‌ها
            </Link>
            <span
                className={classJoin([
                    'elSwitch bg-gray-primary text-sm font-medium text-white shadow text-gray-800 flex items-center justify-center w-1/2 rounded-lg h-[48px] transition-all top-[4px] absolute',
                    isActive ? 'right-1' : 'left-1',
                ])}
            >
                {isActive ? 'سفارش‌های فعال' : 'تاریخچه‌ی سفارش‌ها'}
            </span>
        </div>
    )
}

export default TabSwitch
