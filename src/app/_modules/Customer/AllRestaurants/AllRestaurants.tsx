'use client'

import {FC} from "react";
import RestaurantCard from "@modules/Customer/AllRestaurants/RestaurantCard";
import {RestaurantType} from "@utils/types";

export const AllRestaurant: FC = () => {
    const restaurantList: RestaurantType[] = [
        {
            imageSrc: "/RestaurantDefault/restaurant1.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/1",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant2.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/2",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant3.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/3",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/4",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/5",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/6",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/7",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurant/8",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
    ]

    return (
        <div className={"mt-6"}>
            <span className={"text-xl font-medium"}>رستوران‌ها</span>
            <div className={"w-full mt-10"}>
                {
                    restaurantList.map((restaurant, index) => (
                        <RestaurantCard key={index} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllRestaurant;