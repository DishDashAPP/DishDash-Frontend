'use client'

import {FC, useEffect, useState} from "react";
import RestaurantCard from "@modules/Customer/AllRestaurants/RestaurantCard/RestaurantCard";
import {RestaurantType} from "@utils/types";
import {allRestaurantsReq} from "@api/services/customerService";
import {convertAllRestaurantsResponse} from "@utils/converters";

const AllRestaurant: FC = () => {
    const [allRestaurants, setAllRestaurants] = useState<RestaurantType[]>([]);

    useEffect(() => {
        const fetchAllRestaurants = async () => {
            const response = await allRestaurantsReq();

            if (response.isSuccess)
                setAllRestaurants(convertAllRestaurantsResponse(response.data))
            else
                setAllRestaurants([])
        }


        fetchAllRestaurants()
    }, [])

    return (
        <div className={"mt-6 w-full px-8"}>
            <span className={"text-xl font-medium"}>رستوران‌ها</span>
            {
                allRestaurants.length === 0 &&
                    <div className={"error"}>رستورانی وجود ندارد</div>
            }
            <div className={"w-full mt-10"}>
                {
                    allRestaurants.map((restaurant, index) => (
                        <RestaurantCard key={index} restaurant={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllRestaurant;