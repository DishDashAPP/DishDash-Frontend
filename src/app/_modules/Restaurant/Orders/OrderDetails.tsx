import { FC } from 'react'
import Button from '@components/Button/Button'
import { Order } from '@utils/types'

type orderDetailsProps = {
    order: Order
}

const OrderDetails: FC<orderDetailsProps> = ({ order }) => {
    const isActiveOrder = order.status === 'PREPARING'
    return (
        <div>
            <div className="flex flex-col gap-y-4">
                {order.orderItems.map((foodItem, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{foodItem.food_name}</span>
                        <div className="flex items-center">
                            <span className="ml-4">x{foodItem.quantity}</span>
                            <span>{foodItem.price.amount} تومان</span>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-gray-border my-4" />
            <div className="flex justify-between items-center">
                <span className="text-sm font-bold">جمع کل</span>
                <span>
                    <span className="font-bold">{order.totalPrice.amount}</span>
                    <span> تومان</span>
                </span>
            </div>

            <div className="flex flex-col items-start text-sm mt-8">
                <span className="font-bold">نام مشتری:</span>
                <span className="mt-2">{order.customer.first_name + ' ' + order.customer.last_name}</span>
            </div>
            <div className="flex flex-col items-start text-sm mt-4">
                <span className="font-bold">نشانی:</span>
                <span className="mt-2">{order.customer.address}</span>
            </div>
            {!isActiveOrder && (
                <div className="flex flex-col items-start text-sm mt-4">
                    <span className="font-bold">نام پیک:</span>
                    <span className="mt-2">
                        {order.deliveryPerson.first_name + ' ' + order.deliveryPerson.last_name}
                    </span>
                </div>
            )}
            <Button className="mt-8 w-full">{isActiveOrder ? 'ارسال سفارش توسط پیک' : 'چاپ فاکتور'}</Button>
        </div>
    )
}

export default OrderDetails
