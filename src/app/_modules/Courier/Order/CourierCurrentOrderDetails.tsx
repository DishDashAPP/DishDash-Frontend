'use client'

import { FC, useEffect, useState } from 'react'
import Button from '@components/Button/Button'
import { Order } from '@utils/types'
import { toast } from 'sonner'
import {
    getDeliveryPersonCurrentOrderReq,
    updateDeliveryPersonCurrentOrderReq,
} from '@api/services/deliveryPersonService'
import { priceWithCommas } from '@utils/maskPrice'

const CourierCurrentOrderDetails: FC = () => {
    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true)
            const response = await getDeliveryPersonCurrentOrderReq()
            if (response.isSuccess) {
                setOrder(response.data as Order)
            }
            setLoading(false)
        }
        fetchOrder()
    }, [])

    const handleClick = async () => {
        if (order) {
            const response = await updateDeliveryPersonCurrentOrderReq(order.id.toString(), 'DELIVERED')
            if (response.isSuccess) {
                toast.success('سفارش با موفقیت تحویل داده شد.')
                setOrder({ ...order, status: 'DELIVERED' })
            } else {
                toast.error('خطایی در تحویل سفارش رخ داده است.')
            }
        }
    }

    const restaurantName = `آدرس مبدا (رستوران${order?.restaurant_owner?.restaurant_name ? ` ${order?.restaurant_owner.restaurant_name}` : ''})`
    const customerName = [order?.customer_dto.first_name, order?.customer_dto.last_name].join(' ')
    const destinationLabel = `آدرس مقصد (${customerName})`

    return (
        <div className="flex flex-col p-6 bg-white absolute inset-x-0 bottom-[24px] mx-4 rounded-xl z-40">
            {loading ? (
                <div className="flex items-center justify-center animate-pulse text-base">در حال بارگذاری...</div>
            ) : !order ? (
                <div className="flex items-center justify-center text-base">سفارشی یافت نشد</div>
            ) : (
                <>
                    <span className="text-green text-lg self-center font-medium hidden">رایگان!</span>
                    <span className="text-green text-xl self-center font-semibold">{priceWithCommas(40000)} تومان</span>
                    <div className="flex flex-col mt-6">
                        <div className="flex items-stretch gap-x-2">
                            <div className="flex flex-col items-center justify-start min-h-full">
                                <div className="flex items-center justify-center bg-gray-primary min-w-[32px] min-h-[32px] rounded-full text-white">
                                    1
                                </div>
                                <div className="flex items-center justify-center h-full">
                                    <span className="border-l border-gray-primary border-2 min-h-full" />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-medium text-sm text-gray-primary">{restaurantName}</h2>
                                <p className="font-normal text-xs text-gray-secondary mt-2 mb-4">
                                    {order.restaurant_owner?.address || 'آدرسی ثبت نشده است'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2">
                            <div className="flex flex-col items-center justify-start">
                                <div className="flex items-center justify-center bg-gray-primary w-[32px] h-[32px] rounded-full text-white">
                                    2
                                </div>
                            </div>
                            <div>
                                <h2 className="font-medium text-sm text-gray-primary">{destinationLabel}</h2>
                                <p className="font-normal text-xs text-gray-secondary mt-2 mb-4">
                                    {order.customer_dto?.address || 'آدرسی ثبت نشده است'}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button className="mt-2 w-full" onClick={handleClick} disabled={order.status === 'DELIVERED'}>
                        {order.status === 'DELIVERED' ? 'تحویل داده شده' : 'تحویل سفارش'}
                    </Button>
                </>
            )}
        </div>
    )
}

export default CourierCurrentOrderDetails
