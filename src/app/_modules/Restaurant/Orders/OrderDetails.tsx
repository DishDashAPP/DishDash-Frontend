import { FC } from 'react'
import Button from '@components/Button/Button'
import { Order } from '@utils/types'
import { updateRestaurantOrderStatusReq } from '@api/services/restaurantService'
import { priceWithCommas } from '@utils/maskPrice'

type OrderDetailsProps = {
    order: Order
    onUpdate: () => void
}

const OrderDetails: FC<OrderDetailsProps> = ({ order, onUpdate }) => {
    const isActiveOrder = order.status === 'PREPARING'

    const handleClick = async () => {
        if (isActiveOrder) {
            const response = await updateRestaurantOrderStatusReq(order.id.toString(), 'DELIVERING')
            if (response.isSuccess) {
                onUpdate()
            }
        } else {
            console.log('Printing invoice')
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-y-4">
                {order.order_items.map((foodItem, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{foodItem.food_name}</span>
                        <div className="flex items-center">
                            <span className="ml-4">x{foodItem.quantity}</span>
                            <span>{priceWithCommas(foodItem.price.amount)} تومان</span>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-gray-border my-4" />
            <div className="flex justify-between items-center">
                <span className="text-sm font-bold">جمع کل</span>
                <span>
                    <span className="font-bold">{priceWithCommas(order.create_price.amount)}</span>
                    <span> تومان</span>
                </span>
            </div>

            <div className="flex flex-col items-start text-sm mt-8">
                <span className="font-bold">نام مشتری:</span>
                <span className="mt-2">{order.customer_dto.first_name + ' ' + order.customer_dto.last_name}</span>
            </div>
            <div className="flex flex-col items-start text-sm mt-4">
                <span className="font-bold">نشانی:</span>
                <span className="mt-2">{order.customer_dto.address}</span>
            </div>
            {!isActiveOrder && order.delivery_person && (
                <div className="flex flex-col items-start text-sm mt-4">
                    <span className="font-bold">نام پیک:</span>
                    <span className="mt-2">
                        {order.delivery_person.first_name + ' ' + order.delivery_person.last_name}
                    </span>
                </div>
            )}
            <Button className="mt-8 w-full" onClick={handleClick}>
                {isActiveOrder ? 'ارسال سفارش توسط پیک' : 'چاپ فاکتور'}
            </Button>
        </div>
    )
}

export default OrderDetails
