'use client'

import {FC} from "react";
import {ShoppingCartType} from "@utils/types";
import Rate from "@components/Rate/Rate";
import Image from "next/image";
import Button from "@components/Button/Button";

const ShoppingCartCard: FC<{ shoppingCart: ShoppingCartType }> = ({shoppingCart}) => {
    return (
        <div className={"px-8 py-4 mt-7 mb-6 border-[1px] border-gray-card_border rounded-lg"}>
            <div className={"flex"}>
                <span className={"text-sm text-black font-medium ml-2"}>{shoppingCart.restaurantName}</span>
                <Rate rate={shoppingCart.restaurantRate} variant={"small"}/>
            </div>

            <div className={"mt-5"}>
                {shoppingCart.foods.map(food => (
                    <div className={"flex mt-1"} key={food.id}>
                        <Image src={food.imageSrc} width={30} height={30} alt={food.name}/>
                        <div className={"flex items-center mr-2 font-normal text-xs text-black"}>
                            <span className={"ml-2"}>({food.count})</span>
                            <span>{food.name}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={"flex justify-between mt-5 gap-x-4"}>
                <Button label={"ادامه‌ی خرید"} className={"w-full"}/>
                <Button label={"حذف سبد"} variant={"secondary"} className={"w-full"}/>
            </div>
        </div>
    )
}

export default ShoppingCartCard;