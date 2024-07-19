'use client'

import {FC} from "react";
import RestaurantCard from "@modules/Customer/AllRestaurants/RestaurantCard";
import {RestaurantType} from "@utils/types";

export const AllRestaurant: FC = () => {
    const restaurantList: RestaurantType[] = [
        {
            id: 1,
            imageSrc: "/RestaurantDefault/restaurant1.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/1",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 2,
            imageSrc: "/RestaurantDefault/restaurant2.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/2",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 3,
            imageSrc: "/RestaurantDefault/restaurant3.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/3",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 4,
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/4",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 5,
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/5",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 6,
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/6",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 7,
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/7",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: 8,
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            onClickLink: "/restaurants/8",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
    ]

    return (
        <div className={"mt-6 w-full"}>
            <span className={"text-xl font-medium"}>رستوران‌ها</span>
            {
                restaurantList.length === 0 &&
                    <div className={"error"}>رستورانی وجود ندارد</div>
            }
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