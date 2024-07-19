'use client'

import {FC} from "react";
import Image from "next/image";

type RestaurantHeaderPartProps = {
    title: string[],
    subtitle: string[],
    iconSrc: string,
    iconAlt: string
}

const RestaurantHeaderPart: FC<RestaurantHeaderPartProps> = ({title, subtitle, iconSrc, iconAlt}) => {
    return (
        <div className={"flex flex-col items-center bg-white"}>
            <div className={"text-sm text-gray-primary"}>
                {
                    title.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))
                }
            </div>
            <div className={"text-xs text-gray-tertiary mt-1"}>
                <Image src={iconSrc} alt={iconAlt} width={16} height={16} className={"ml-[1px] inline-block"}/>
                {
                    subtitle.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default RestaurantHeaderPart;