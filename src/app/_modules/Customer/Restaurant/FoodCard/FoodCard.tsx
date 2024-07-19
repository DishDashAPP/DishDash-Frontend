'use client'

import {FC} from "react";
import {FoodType} from "@utils/types";
import Image from "next/image";
import AddFoodButton from "@components/AddFoodButton/AddFoodButton";

type FoodCardProps = {
    restaurantId: string,
    food: FoodType
}

const FoodCard: FC<FoodCardProps> = ({restaurantId, food}) => {
    return (
        <div className={"flex justify-between items-start mt-8 mb-4 cursor-pointer"}>
            <div>
                <div className={"text-sm text-black"}>{food.name}</div>
                <div className={"mt-2 text-xs text-gray-tertiary"}>{food.description}</div>
                <div className={"mt-6 "}>
                    <span className={"text-sm"}>{food.price}</span>
                    <span className={"text-xs"}> هزار تومان</span>
                </div>
            </div>
            <div className={"flex flex-col"}>
                <Image src={food.imageSrc} alt={food.name} width={90} height={90} className={"rounded-lg"}/>
                <AddFoodButton restaurantId={restaurantId} foodId={food.id}/>
            </div>
        </div>
    )
}

export default FoodCard;