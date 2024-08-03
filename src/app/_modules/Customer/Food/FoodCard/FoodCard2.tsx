'use client'

import { FC } from 'react'
import { FoodType, RestaurantIdFoodType } from '@utils/types'
import Image from 'next/image'
import AddFoodButton from '@components/AddFoodButton/AddFoodButton'
import Link from 'next/link'
import { CUSTOMER_RESTAURANTS } from '@utils/links'

const FoodCard2: FC<RestaurantIdFoodType> = ({ restaurantId, food }) => {
    return (
        <>
            <Link
                href={CUSTOMER_RESTAURANTS + '/' + restaurantId + '/' + food.id}
                className={'flex flex-col justify-between items-start px-8 mt-8 mb-6 cursor-pointer'}
            >
                <div className={'flex'}>
                    <Image src={food.imageSrc} alt={food.name} width={90} height={90} className={'rounded-lg ml-2'} />
                    <div>
                        <div className={'text-sm text-black'}>{food.name}</div>
                        <div className={'mt-2 text-xs text-gray-tertiary'}>{food.description}</div>
                    </div>
                </div>

                <div className={'flex justify-between w-full items-center h-10'}>
                    <div className={''}>
                        <span className={'text-sm'}>{food.price / 1000}</span>
                        <span className={'text-xs'}> هزار تومان</span>
                    </div>
                    <AddFoodButton restaurantId={restaurantId} foodId={food.id} count={food.count} />
                </div>
            </Link>
            <div className={'border-t border-gray-line'} />
        </>
    )
}

export default FoodCard2
