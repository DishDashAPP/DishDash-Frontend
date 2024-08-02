'use client'

import { FC } from 'react'
import { ShoppingCartIdType, ShoppingCartType } from '@utils/types'
import FoodCard2 from '@modules/Customer/Food/FoodCard/FoodCard2'
import Button from '@components/Button/Button'

const ShoppingCart: FC<ShoppingCartIdType> = ({ shoppingCartId }) => {
    const shoppingCart: ShoppingCartType = {
        id: shoppingCartId,
        restaurantId: '1',
        restaurantName: 'نام رستوران',
        restaurantRate: '۴.۵',
        foods: [
            {
                id: '1',
                imageSrc: '/FoodDefault/food4.svg',
                name: 'پاستا گوجه',
                description: 'سس گوجه، گوشت چرخ‌کرده، پنیر موزارلا،‌ فلفل قرمز',
                price: '۲۵۰',
                count: 2,
                category_id: 0,
            },
            {
                id: '2',
                imageSrc: '/FoodDefault/food4.svg',
                name: 'پاستا پستو',
                description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
                price: '۲۵۰',
                count: 3,
                category_id: 0,
            },
            {
                id: '1',
                imageSrc: '/FoodDefault/food4.svg',
                name: 'پاستا گوجه',
                description: 'سس گوجه، گوشت چرخ‌کرده، پنیر موزارلا،‌ فلفل قرمز',
                price: '۲۵۰',
                count: 2,
                category_id: 0,
            },
            {
                id: '2',
                imageSrc: '/FoodDefault/food4.svg',
                name: 'پاستا پستو',
                description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
                price: '۲۵۰',
                count: 3,
                category_id: 0,
            },
        ],
        total: '۱۵۰۰۰',
        deliveryPrice: '۱۰۰۰۰',
        finalPrice: '۲۵۰۰۰',
    }

    return (
        <div className={'flex flex-col w-full justify-between'}>
            <div>
                <div className={'px-8 text-base font-medium mt-6'}>سبد خرید رستوران {shoppingCart.restaurantName}</div>
                <div className={'mt-3'}>
                    {shoppingCart.foods.map((food, index) => (
                        <FoodCard2 key={index} restaurantId={shoppingCart.restaurantId} food={food} />
                    ))}
                </div>

                <div className={'px-8 mt-8 mb-6 text-black text-sm font-normal'}>
                    <div className={'flex justify-between'}>
                        <span>جمع سفارش</span>
                        <div>
                            <span>{shoppingCart.total}</span>
                            <span className={'text-xs'}> تومان</span>
                        </div>
                    </div>

                    <div className={'flex justify-between mt-4'}>
                        <span>هزینه‌ی ارسال</span>
                        <div>
                            <span>{shoppingCart.deliveryPrice}</span>
                            <span className={'text-xs'}> تومان</span>
                        </div>
                    </div>

                    <div className={'flex justify-between mt-4 text-base font-medium'}>
                        <span>هزینه‌ی ارسال</span>
                        <div>
                            <span>{shoppingCart.deliveryPrice}</span>
                            <span className={'text-sm font-normal'}> تومان</span>
                        </div>
                    </div>
                </div>
            </div>

            <Button label={'پرداخت'} className={'sticky bottom-[85px] w-4/5 mx-auto'} />
        </div>
    )
}

export default ShoppingCart
