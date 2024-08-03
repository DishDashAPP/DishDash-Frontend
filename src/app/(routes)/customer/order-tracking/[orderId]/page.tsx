import { OrderIdType } from '@utils/types'
import { FC } from 'react'
import OrderTracking from '@modules/Customer/OrderTracking/OrderTracking'

type CustomerOrderTrackingPageProps = {
    params: OrderIdType
}

const CustomerOrderTrackingPage: FC<CustomerOrderTrackingPageProps> = ({ params }) => {
    return <OrderTracking orderId={params.orderId} />
}

export default CustomerOrderTrackingPage
