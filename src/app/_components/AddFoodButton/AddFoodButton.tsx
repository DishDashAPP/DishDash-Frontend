'use client'

import {FC, useState} from "react";
import Button from "@components/Button/Button";
import Image from "next/image";
import PLUS from "@public/PLUS.svg";
import MINUS from "@public/MINUS.svg";
import {restaurantIdFoodIdType} from "@utils/types";
import classJoin from "@utils/classJoin";

type AddFoodButtonProps = restaurantIdFoodIdType & {
    simpleClassName?: string,
    addClassName?: string
}

const AddFoodButton: FC<AddFoodButtonProps> = ({restaurantId, foodId, simpleClassName, addClassName}) => {
    const [foodNumber, setFoodNumber] = useState<number>(0);

    return (
        <>
            {foodNumber === 0 ?
                <Button variant={"outline"} onClick={() => setFoodNumber(1)}
                        className={classJoin(["border-primary text-primary py-1 !rounded-lg mt-3", simpleClassName])}>
                    افزودن
                </Button>
                :
                <div className={classJoin(["flex justify-between items-center h-3 mt-5", addClassName])}>
                    <Button className={"flex items-center px-2 h-full !rounded"}
                            onClick={() => setFoodNumber(foodNumber + 1)}>
                        <Image src={PLUS} alt={"add food"} width={14} height={14}/>
                    </Button>
                    <div className={"text-gray-primary font-medium mx-2"}>{foodNumber}</div>
                    <Button variant={"outline"} onClick={() => setFoodNumber(foodNumber - 1)}
                            className={"flex items-center px-2 h-full !rounded !border-gray-border text-gray-tertiary"}>
                        <Image src={MINUS} alt={"remove food"} width={14} height={14}/>
                    </Button>
                </div>
            }
        </>
    )
}

export default AddFoodButton;