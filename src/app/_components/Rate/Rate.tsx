'use client'

import {FC} from "react";
import Image from "next/image";
import STAR from '@public/star.svg';

type RateProps = {
    rate: string
}

const Rate: FC<RateProps> = ({rate}) => {
    return (
        <div className={"flex items-center justify-between bg-white-background px-1 py-0.5 rounded"}>
            <Image src={STAR} alt={"star"} width={20} height={20} className={"ml-0.5"} />
            <span className={"text-sm font-normal"}>{rate}</span>
        </div>
    )
}

export default Rate;