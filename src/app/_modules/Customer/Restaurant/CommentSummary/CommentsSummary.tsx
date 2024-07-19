'use client'

import {FC} from "react";
import {RestaurantIdType} from "@utils/types";
import CHAT from "@public/chat.svg";
import LEFT_ARROW from "@public/left-arrow.svg";
import Image from "next/image";
import Link from "next/link";

const CommentsSummary: FC<RestaurantIdType> = ({restaurantId}) => {
    return (
        <div className={"flex justify-between mt-6 text-sm text-primary"}>
            <div>
                <Image src={CHAT} alt={"chat"} width={16} height={16} className={"inline-block ml-2"}/>
                <span className={"text-black"}>۱۲</span>
                <span className={"text-gray-tertiary"}> نظر</span>
            </div>
            <Link href={""} className={"flex"}>
                <span>مشاهده‌ی نظرات</span>
                <Image src={LEFT_ARROW} alt={"left arrow"} width={16} height={16} className={"inline-block"}/>
            </Link>
        </div>
    )
}

export default CommentsSummary;