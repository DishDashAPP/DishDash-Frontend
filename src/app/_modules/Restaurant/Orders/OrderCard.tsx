import { useState } from 'react'
import { Order } from '@utils/types'
import { FC } from 'react'
import Badge from '@components/Badge/Badge'
import Button from '@components/Button/Button'
import BottomSheet from '@components/BottomSheet/BottomSheet'
import OrderDetails from '@modules/Restaurant/Orders/OrderDetails'
import { formatDateTime } from '@utils/date'
import { priceWithCommas } from '@utils/maskPrice'

type OrderCardProps = {
    order: Order
    onUpdate: () => void
}

const OrderCard: FC<OrderCardProps> = ({ order, onUpdate }) => {
    const [isBottomSheetOpen, setBottomSheetOpen] = useState(false)

    const badgeText = {
        PREPARING: 'جدید',
        DELIVERING: 'در حال ارسال',
        DELIVERED: 'تحویل داده شده',
        NOT_PAID: 'پرداخت نشده',
    }[order.status]

    const isActiveOrder = order.status === 'PREPARING'

    const handleUpdate = () => {
        onUpdate?.()
        setBottomSheetOpen(false)
    }

    return (
        <div className="flex flex-col rounded-lg border border-gray-border p-4 w-full">
            <div className="flex items-center justify-between">
                <span className="text-base font-medium">
                    {order.customer_dto.first_name + ' ' + order.customer_dto.last_name}
                </span>
                <Badge text={badgeText} color={isActiveOrder ? 'green' : 'red'} />
            </div>
            <div className="flex items-center justify-between my-4">
                <div>
                    <span className="font-medium text-sm">{priceWithCommas(order.create_price.amount)}</span>
                    <span className="text-xs"> تومان</span>
                </div>
                <span className="text-xs">{formatDateTime(order.create_time, 'fullDateTime')}</span>
            </div>
            <Button variant="secondary" className="py-3 text-base" onClick={() => setBottomSheetOpen(true)}>
                {isActiveOrder ? 'جزئیات سفارش' : 'مشاهده‌ی فاکتور'}
            </Button>

            <BottomSheet isOpen={isBottomSheetOpen} onClose={() => setBottomSheetOpen(false)}>
                <h2 className="text-base font-semibold mt-4 mb-6">{isActiveOrder ? 'جزئیات سفارش' : 'فاکتور'}</h2>
                <OrderDetails order={order} onUpdate={handleUpdate} />
            </BottomSheet>
        </div>
    )
}

export default OrderCard
