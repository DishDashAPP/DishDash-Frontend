'use client'

import {orderItem} from "@utils/types";
import {FC} from "react";
import Badge from "@components/Badge/Badge";
import Button from "@components/Button/Button";

type orderCardProps = {
    order: orderItem
}

const OrderCard: FC<orderCardProps> = ({order}) => {

    const badgeText = {
        preparing: 'جدید',
        delivering: 'در حال ارسال',
        delivered: 'تحویل داده شده'
    }[order.status]

    const isActiveOrder = order.status === 'preparing'

    return(
        <div className="flex flex-col rounded-lg border border-gray-border p-4 w-full">
            <div className="flex items-center justify-between">
                <span>{order.user.name}</span>
                <Badge text={badgeText} color={isActiveOrder ? 'green' : 'red'}/>
            </div>
            <div className="flex items-center justify-between my-4">
                <div>
                    <span>{order.price}</span>
                    <span> تومان</span>
                </div>
                <span>{order.createdAt}</span>
            </div>
            <Button variant="secondary" className="py-3 tex-base">
                {isActiveOrder ? 'جزئیات سفارش' : 'مشاهده‌ی فاکتور'}
            </Button>
        </div>
    )
}

export default OrderCard;

