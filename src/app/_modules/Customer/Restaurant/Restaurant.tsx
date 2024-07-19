'use client'

import {FC} from "react";
import {idType, RestaurantType} from "@utils/types";
import RestaurantHeader from "@modules/Customer/Restaurant/RestaurantHeader/RestaurantHeader";
import Image from "next/image";
import CommentsSummary from "@modules/Customer/Restaurant/CommentSummary/CommentsSummary";

const Restaurant: FC<idType> = ({id}) => {
    const restaurant: RestaurantType = {
        id: id,
        imageSrc: "/RestaurantDefault/restaurant1.svg",
        name: "اسم رستوران",
        rate: "۴.۵",
        courierPrice: "۱۰۰۰۰",
        WaitingTime: "۳۰"
    }



    return (
        <div>
            <Image src={restaurant.imageSrc} alt={restaurant.name} width={5000} height={5000}/>
            <div className={"px-8"}>
                <div className={"font-medium text-lg mt-2"}>{restaurant.name}</div>
                <RestaurantHeader restaurant={restaurant}/>
                <CommentsSummary id={id}/>

                <div className={"font-medium text-lg mt-2"}>اسم دسته‌بندی غذا</div>
            </div>
        </div>
    )
}

export default Restaurant;