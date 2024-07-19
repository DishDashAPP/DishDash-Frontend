'use client'

import {FC} from "react";
import Image from "next/image";
import Rate from "@components/Rate/Rate";
import {RestaurantType} from "@modules/Customer/AllRestaurants/AllRestaurants";

export const RestaurantCard: FC<{restaurant: RestaurantType}> = ({restaurant}) => {
    return (
        <div className={"cursor-pointer mt-8 mb-4"} onClick={() => restaurant.onClickLink}>
            <Image src={restaurant.imageSrc} alt={restaurant.name} width={6000} height={5000} />
            <div className={"flex justify-between items-center mt-2"}>
                <div className={"text-sm font-medium"}>
                    {restaurant.name}
                    <div className={"text-gray-secondary text-xs font-normal mt-1"}>
                        <span>پیک رستوران </span>
                        <span>{restaurant.courierPrice} تومان</span>
                        <span> تا </span>
                        <span>{restaurant.WaitingTime} دقیقه</span>
                    </div>
                </div>
                <Rate rate={restaurant.rate} />
            </div>
        </div>
    )
}

export default RestaurantCard;