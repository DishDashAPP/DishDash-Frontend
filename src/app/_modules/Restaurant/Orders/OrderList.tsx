'use client'

import {FC} from "react";
import {orderItem, orderType} from "@utils/types";
import OrderCard from "@modules/Restaurant/Orders/OrderCard";

type orderListProps = {
    orders: orderItem[],
    filter: orderType
}

const OrderList: FC<orderListProps> = ({orders, filter}) => {

    const isActiveOrderFilter: boolean = filter === 'active'

    const filteredOrders: orderItem[] = orders.filter(order => isActiveOrderFilter ? order.status === 'preparing' : order.status !== 'preparing')

    return (
        <div className="flex flex-col gap-y-4 w-full mt-6">
            {filteredOrders.map((order, index) => (
                <OrderCard order={order} key={index}/>
            ))}
        </div>
    )
}

export default OrderList;