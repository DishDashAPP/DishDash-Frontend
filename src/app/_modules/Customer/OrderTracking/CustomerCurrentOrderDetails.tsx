'use client'

import { FC, useState, useEffect } from 'react'
import classJoin from '@utils/classJoin'
import ProfileImage from '@components/ProfileImage/ProfileImage'
import Image from 'next/image'
import CALL from '@public/call.svg'
import { Order } from '@utils/types'

type CustomerCurrentOrderDetailsProps = {
    order: Order
}

const CustomerCurrentOrderDetails: FC<CustomerCurrentOrderDetailsProps> = ({ order }) => {
    const [orderStatus, setOrderStatus] = useState(order.status)
    let activeStep = 0
    if (orderStatus === 'PREPARING') {
        activeStep = 1
    } else if (orderStatus === 'DELIVERING') {
        activeStep = 2
    } else if (orderStatus === 'DELIVERED') {
        activeStep = 3
    }

    useEffect(() => {
        setOrderStatus(order.status)
    }, [order.status])

    return (
        <div className="flex flex-col p-6 bg-white absolute inset-x-0 bottom-[24px] mx-4 rounded-xl z-5">
            <div className="flex flex-col mt-6">
                <div className="flex items-stretch gap-x-2">
                    <div className="flex flex-col items-center justify-start min-h-full">
                        <div
                            className={classJoin([
                                'flex items-center justify-center min-w-[32px] min-h-[32px] border-gray-border rounded-full text-white',
                                activeStep >= 1 ? 'bg-primary' : 'bg-gray-primary',
                            ])}
                        >
                            1
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <span
                                className={classJoin([
                                    'border-l border-2 min-h-full',
                                    activeStep >= 1 ? 'border-primary' : 'border-gray-primary',
                                ])}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-sm text-gray-primary">در حال آماده‌سازی</h2>
                        <p className="font-normal text-xs text-gray-secondary mt-2 mb-4">
                            رستوران در حال آماده‌سازی سفارش شما است.
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch gap-x-2">
                    <div className="flex flex-col items-center justify-start min-h-full">
                        <div
                            className={classJoin([
                                'flex items-center justify-center min-w-[32px] min-h-[32px] border-gray-border rounded-full text-white',
                                activeStep >= 2 ? 'bg-primary' : 'bg-gray-primary',
                            ])}
                        >
                            2
                        </div>
                        <div className="flex items-center justify-center h-full">
                            <span
                                className={classJoin([
                                    'border-l border-2 min-h-full',
                                    activeStep >= 2 ? 'border-primary' : 'border-gray-primary',
                                ])}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-sm text-gray-primary">در حال ارسال</h2>
                        <p className="font-normal text-xs text-gray-secondary mt-2 mb-4">
                            پیک در حال ارسال سفارش شما است.
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-x-2">
                    <div className="flex flex-col items-center justify-start">
                        <div
                            className={classJoin([
                                'flex items-center justify-center min-w-[32px] min-h-[32px] border-gray-border rounded-full text-white',
                                activeStep >= 3 ? 'bg-primary' : 'bg-gray-primary',
                            ])}
                        >
                            3
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-sm text-gray-primary">تحویل داده شد</h2>
                        <p className="font-normal text-xs text-gray-secondary mt-2 mb-4">
                            سفارش توسط پیک به شما تحویل داده شد.
                        </p>
                    </div>
                </div>
                {order.delivery_person?.username && (
                    <div className={classJoin(['flex items-center justify-between'])}>
                        <div className="flex items-stretch">
                            <ProfileImage name={order.delivery_person?.username || ''} />
                            <div className="flex flex-col justify-between mr-2 py-2">
                                <h1 className="text-base font-medium">
                                    {order.delivery_person?.first_name} {order.delivery_person?.last_name}
                                </h1>
                                <p className="text-xs lrt">پیک</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-primary min-h-[36px] min-w-[36px] rounded-full">
                            <Image src={CALL} alt="call" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomerCurrentOrderDetails
