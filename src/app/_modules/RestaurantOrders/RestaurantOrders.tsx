'use client'

import {FC} from "react";
import {orderType} from "@utils/types";
import {useSearchParams} from "next/navigation";
import TabSwitch from "@modules/RestaurantOrders/TabSwitch";
import OrderList from "@modules/RestaurantOrders/OrderList";

// moch orders
const orders = [
    {
        id: 1,
        price: 15000,
        status: 'preparing',
        createdAt: '1400/01/01',
        user: {
            name: 'محمدامین لطفی'
        }
    },
    {
        id: 2,
        price: 30000,
        status: 'delivered',
        createdAt: '1400/01/01',
        user: {
            name: 'محمدامین لطفی'
        }
    },
    {
        id: 3,
        price: 15000,
        status: 'preparing',
        createdAt: '1400/01/01',
        user: {
            name: 'محمدامین لطفی'
        }
    },
    {
        id: 4,
        price: 30000,
        status: 'delivered',
        createdAt: '1400/01/01',
        user: {
            name: 'محمدامین لطفی'
        }
    },
    {
        id: 5,
        price: 15000,
        status: 'preparing',
        createdAt: '1400/01/01',
        user: {
            name: 'محمدامین لطفی'
        }
    },
    {
        id: 6,
        price: 30000,
        status: 'delivered',
        createdAt: '1400/01/01',
        user: {
            name: 'محمدامین لطفی'
        }
    }
]

const RestaurantOrders: FC = () => {
    const searchParams = useSearchParams();
    const orderType: orderType = searchParams.get('type') as orderType;

    return (
        <div className="flex flex-col items-center w-full">
            <TabSwitch />
            <OrderList orders={orders} filter={orderType} />
        </div>
    );
}

export default RestaurantOrders;