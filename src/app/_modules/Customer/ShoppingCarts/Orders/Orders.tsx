'use client'

import { FC, useEffect, useState } from 'react'
import ShoppingCartCard from '@modules/Customer/ShoppingCarts/ShoppingCartCard/ShoppingCartCard'
import { getCustomerOrdersReq } from '@api/services/customerService'
import { CustomerOrderType } from '@utils/types'
import { toast } from 'sonner'

const Orders: FC = () => {
    const [orders, setOrders] = useState<CustomerOrderType[]>([])

    useEffect(() => {
        getCustomerOrdersReq()
            .then((response) => {
                if (response.isSuccess) {
                    const res = response.data as CustomerOrderType[]
                    setOrders(res)
                } else {
                    toast.error('خطایی در دریافت اطلاعات سفارش‌ها رخ داده است.')
                }
            })
            .catch(() => {
                toast.error('خطایی در دریافت اطلاعات سفارش‌ها رخ داده است.')
            })
    }, [])

    return (
        <div className={'px-8 w-full'}>
            <div className={'text-base font-medium mt-6'}>سفارش‌ها</div>
            <div className={'mt-3'}>
                {orders.map((order, index) => (
                    <ShoppingCartCard key={index} shoppingCart={order} isHistory={true} />
                ))}
            </div>
        </div>
    )
}

export default Orders
