'use client'

import { FC, useEffect, useState } from 'react'
import { OrderIdType, Order } from '@utils/types'
import CustomerCurrentOrderDetails from '@modules/Customer/OrderTracking/CustomerCurrentOrderDetails'
import dynamic from 'next/dynamic'
import { getCustomerCurrentOrderReq } from '@api/services/customerService'
import { TLocation } from '@utils/apiTypes'
import { toast } from 'sonner'

const DynamicMap = dynamic(() => import('@modules/Map/Map'), { ssr: false })

const OrderTracking: FC<OrderIdType> = ({ orderId }) => {
    const [order, setOrder] = useState<Order | null>(null)
    const [position, setPosition] = useState<TLocation | null>(null)

    useEffect(() => {
        getCustomerCurrentOrderReq()
            .then((response) => {
                if (response.isSuccess) {
                    const orderData = response.data as Order
                    setOrder(orderData)
                    if (orderData.delivery_person && orderData.delivery_person.location) {
                        setPosition({
                            latitude: orderData.delivery_person.location.latitude,
                            longitude: orderData.delivery_person.location.longitude,
                        })
                    }
                } else {
                    toast.error('خطایی در دریافت اطلاعات سفارش رخ داده است.')
                }
            })
            .catch(() => {
                toast.error('خطایی در دریافت اطلاعات سفارش رخ داده است.')
            })
    }, [orderId])

    return (
        <div className="flex flex-col w-full bg-gray-secondary relative">
            <div className="flex flex-1 max-w-full max-h-[90vh] overflow-hidden z-0">
                <DynamicMap position={position} />
            </div>
            {order && <CustomerCurrentOrderDetails order={order} />}
        </div>
    )
}

export default OrderTracking
