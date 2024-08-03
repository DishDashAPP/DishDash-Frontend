import { FC } from 'react'
import { OrderIdType } from '@utils/types'
import CustomerCurrentOrderDetails from '@modules/Customer/OrderTracking/CustomerCurrentOrderDetails'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@modules/Map/Map'), { ssr: false })

const position = {
    latitude: 35.6895,
    longitude: 51.3896,
}

const OrderTracking: FC<OrderIdType> = ({ orderId }) => {
    return (
        <div className="flex flex-col w-full bg-gray-secondary relative">
            <div className="flex flex-1 max-w-full max-h-[90vh] overflow-hidden z-0">
                <DynamicMap position={position} />
            </div>
            <CustomerCurrentOrderDetails orderId={orderId} />
        </div>
    )
}

export default OrderTracking
