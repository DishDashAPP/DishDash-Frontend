'use client'

import {FC, useEffect, useState} from "react";
import RestaurantCard from "@modules/Customer/AllRestaurants/RestaurantCard/RestaurantCard";
import {RestaurantType} from "@utils/types";
import {allRestaurantsReq} from "@api/services/customerService";

const AllRestaurant: FC = () => {
    const [allRestaurants, setAllRestaurants] = useState<RestaurantType[]>([]);

    useEffect(() => {
        const fetchAllRestaurants = async () => {
            const response = await allRestaurantsReq();

            if (response.isSuccess) {
                console.log(response.data);
            } else {
                console.log(response.status, response.message);
            }
        }


        fetchAllRestaurants().then(
            () => console.log("All restaurants fetched.")
        );
    })

    const restaurantList: RestaurantType[] = [
        {
            id: "1",
            imageSrc: "/RestaurantDefault/restaurant1.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: "2",
            imageSrc: "/RestaurantDefault/restaurant2.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: "3",
            imageSrc: "/RestaurantDefault/restaurant3.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: "4",
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: "5",
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
        {
            id: "6",
            imageSrc: "/RestaurantDefault/restaurant4.svg",
            name: "اسم رستوران",
            rate: "۴.۵",
            courierPrice: "۱۰۰۰۰",
            WaitingTime: "۳۰"
        },
    ]

    return (
        <div className={"mt-6 w-full px-8"}>
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