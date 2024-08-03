'use client'

import { FC } from 'react'
import { FoodType, RestaurantIdFoodType } from '@utils/types'
import Image from 'next/image'
import AddFoodButton from '@components/AddFoodButton/AddFoodButton'
import Link from 'next/link'
import { CUSTOMER_RESTAURANTS } from '@utils/links'
import { toFarsiNumber } from '@utils/toFarsiNumber'

type FoodCard1Props = RestaurantIdFoodType & {
    onChangeFoodCount?: (foodId: string, newCount: number) => void
}

const FoodCard1: FC<FoodCard1Props> = ({ restaurantId, food, onChangeFoodCount }) => {
    return (
        <Link
            href={CUSTOMER_RESTAURANTS + '/' + restaurantId + '/' + food.id}
            className={'flex justify-between items-start mt-8 mb-4 cursor-pointer'}
        >
            <div>
                <div className={'text-sm text-black'}>{food.name}</div>
                <div className={'mt-2 text-xs text-gray-tertiary'}>{food.description}</div>
                <div className={'mt-6'}>
                    <span className={'text-sm'}>{toFarsiNumber(food.price / 1000)}</span>
                    <span className={'text-xs'}> هزار تومان</span>
                </div>
            </div>
            <div className={'flex flex-col'}>
                <Image src={food.imageSrc} alt={food.name} width={90} height={90} className={'rounded-lg'} />
                <AddFoodButton restaurantId={restaurantId} foodId={food.id} count={food.count} onChangeFoodCount={onChangeFoodCount} />
            </div>
        </Link>
    )
}

export default FoodCard1
