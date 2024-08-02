'use client'

import { FC, useState } from 'react'
import { FoodType, RestaurantIdType, RestaurantType, TChip } from '@utils/types'
import RestaurantHeader from '@modules/Customer/Restaurant/RestaurantHeader/RestaurantHeader'
import Image from 'next/image'
import CommentsSummary from '@modules/Customer/Restaurant/CommentSummary/CommentsSummary'
import Chips from '@components/Chips/Chips'
import FoodCard1 from '@modules/Customer/Food/FoodCard/FoodCard1'
import Button from '@components/Button/Button'

const Restaurant: FC<RestaurantIdType> = ({ restaurantId }) => {
    const [category, setCategory] = useState<TChip>({
        id: 0,
        name: 'همه',
    })
    function onCategoryChange(category: TChip) {
        setCategory(category)
    }

    const restaurant: RestaurantType = {
        id: restaurantId,
        imageSrc: '/RestaurantDefault/restaurant1.svg',
        name: 'اسم رستوران',
        rate: '۴.۵',
        courierPrice: '۱۰۰۰۰',
        WaitingTime: '۳۰',
    }

    const tChips: TChip[] = [
        {
            id: 0,
            name: 'همه',
        },
        {
            id: 1,
            name: 'غذای ایرانی',
        },
        {
            id: 2,
            name: 'پیتزا',
        },
        {
            id: 3,
            name: 'پاستا',
        },
        {
            id: 4,
            name: 'سوخاری',
        },
        {
            id: 5,
            name: 'سالاد',
        },
        {
            id: 6,
            name: 'پیش‌غذا',
        },
    ]

    const foods: FoodType[] = [
        {
            id: '1',
            imageSrc: '/FoodDefault/food1.svg',
            name: 'پاستا گوجه',
            description: 'سس گوجه، گوشت چرخ‌کرده، پنیر موزارلا،‌ فلفل قرمز',
            price: '۲۵۰',
        },
        {
            id: '2',
            imageSrc: '/FoodDefault/food2.svg',
            name: 'پاستا پستو',
            description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
            price: '۲۸۰',
        },
        {
            id: '3',
            imageSrc: '/FoodDefault/food2.svg',
            name: 'پاستا پستو',
            description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
            price: '۲۸۰',
        },
        {
            id: '4',
            imageSrc: '/FoodDefault/food2.svg',
            name: 'پاستا پستو',
            description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
            price: '۲۸۰',
        },
    ]

    return (
        <div className={'flex flex-col'}>
            <div className={'sticky top-[56px] bg-white'}>
                <Image src={restaurant.imageSrc} alt={restaurant.name} width={5000} height={5000} />
                <div className={'flex flex-col px-8'}>
                    <div className={'font-medium text-lg mt-2'}>{restaurant.name}</div>
                    <RestaurantHeader restaurant={restaurant} />
                    <CommentsSummary restaurantId={restaurantId} />
                </div>
                <div className={'border-t border-gray-line mt-2'} />
                <div className={'px-8 max-w-[430px]'}>
                    <Chips
                        chips={tChips}
                        canAddNewCategory={false}
                        className={'mt-4'}
                        onCategoryChange={onCategoryChange}
                    />
                    <div className={'font-medium text-lg mt-2 mb-3'}>{category.name}</div>
                </div>
            </div>

            <div className={'px-8'}>
                {foods.map((food, index) => (
                    <FoodCard1 key={index} restaurantId={restaurantId} food={food} />
                ))}
            </div>

            <Button label={'تکمیل خرید'} className={'sticky bottom-[85px] w-4/5 mx-auto'} />
        </div>
    )
}

export default Restaurant
