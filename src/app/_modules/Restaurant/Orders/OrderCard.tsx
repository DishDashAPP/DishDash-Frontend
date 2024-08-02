'use client'

import { useState } from 'react'
import { Order, OrderItem } from '@utils/types'
import { FC } from 'react'
import Badge from '@components/Badge/Badge'
import Button from '@components/Button/Button'
import BottomSheet from '@components/BottomSheet/BottomSheet'
import OrderDetails from '@modules/Restaurant/Orders/OrderDetails'

type OrderCardProps = {
    order: Order
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false)

    const badgeText = {
        PREPARING: 'جدید',
        DELIVERING: 'در حال ارسال',
        DELIVERED: 'تحویل داده شده',
        NOT_PAID: 'پرداخت نشده',
    }[order.status]

    const isActiveOrder = order.status === 'PREPARING'

    return (
        <div className="flex flex-col rounded-lg border border-gray-border p-4 w-full">
            <div className="flex items-center justify-between">
                <span>{order.customer.first_name}</span>
                <Badge text={badgeText} color={isActiveOrder ? 'green' : 'red'} />
            </div>
            <div className="flex items-center justify-between my-4">
                <div>
                    <span>{order.totalPrice.amount}</span>
                    <span> تومان</span>
                </div>
                <span>{order.createdAt}</span>
            </div>
            <Button variant="secondary" className="py-3 text-base" onClick={() => setBottomSheetOpen(true)}>
                {isActiveOrder ? 'جزئیات سفارش' : 'مشاهده‌ی فاکتور'}
            </Button>

            <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)}>
                <h2 className="text-base font-semibold mt-4 mb-6">{isActiveOrder ? 'جزئیات سفارش' : 'فاکتور'}</h2>
                <OrderDetails order={order} />
            </BottomSheet>
        </div>
    )
}

export default OrderCard
