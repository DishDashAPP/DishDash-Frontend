'use client'

import {FC} from "react";
import {orderType} from "@utils/types";
import {useSearchParams} from "next/navigation";
import TabSwitch from "@modules/RestaurantOrders/TabSwitch";

const RestaurantOrders: FC = () => {
    const searchParams = useSearchParams();
    const orderType: orderType = searchParams.get('type') as orderType || 'active';
    console.log(orderType);

    return (
        <div className="flex flex-col items-center w-full">
            <TabSwitch />
        </div>
    );
}

export default RestaurantOrders;