'use client'

import { FC } from 'react'
import { FoodType, RestaurantIdFoodIdType } from '@utils/types'
import AddFoodButton from '@components/AddFoodButton/AddFoodButton'
import Image from 'next/image'

const Food: FC<RestaurantIdFoodIdType> = ({ restaurantId, foodId }) => {
    const food: FoodType = {
        id: foodId,
        imageSrc: '/FoodDefault/food3.svg',
        name: 'پاستا پستو',
        description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
        price: '۲۸۰',
        category_id: 0,
    }

    return (
        <div className={'flex flex-col w-full justify-between items-center mb-5'}>
            <div className={'flex flex-col items-center mt-6'}>
                <div className={'font-medium text-lg'}>جزئیات محصول</div>
                <Image src={food.imageSrc} alt={food.name} width={5000} height={5000} className={'mt-3'} />
                <div className={'flex flex-col w-full items-start mt-6'}>
                    <div className={'text-lg text-black'}>{food.name}</div>
                    <div className={'mt-2 text-gray-tertiary'}>{food.description}</div>
                    <div className={'mt-8'}>
                        <span className={'text-lg font-medium'}>{food.price}</span>
                        <span> هزار تومان</span>
                    </div>
                </div>
            </div>
            <AddFoodButton
                restaurantId={restaurantId}
                foodId={foodId}
                simpleClassName={'w-4/5 mx-auto h-12'}
                addClassName={'w-1/2 h-12 text-xl'}
            />
        </div>
    )
}

export default Food
