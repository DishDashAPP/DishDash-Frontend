'use client'

import { FC } from 'react'
import ShoppingCartCard from '@modules/Customer/ShoppingCarts/ShoppingCartCard/ShoppingCartCard'
import { CustomerOrderType } from '@utils/types'

const Orders: FC = () => {
    const orders: CustomerOrderType[] = [
        {
            id: '1',
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
                },
                {
                    id: '2',
                    imageSrc: '/FoodDefault/food4.svg',
                    name: 'پاستا پستو',
                    description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
                    price: '۲۵۰',
                    count: 3,
                },
            ],
        },
        {
            id: '2',
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
                },
                {
                    id: '2',
                    imageSrc: '/FoodDefault/food4.svg',
                    name: 'پاستا پستو',
                    description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
                    price: '۲۵۰',
                    count: 30,
                },
            ],
        },
    ]

    return (
        <div className={'px-8 w-full'}>
            <div className={'text-base font-medium mt-6'}>سبدهای خرید</div>
            <div className={'mt-3'}>
                {orders.map((order, index) => (
                    <ShoppingCartCard key={index} shoppingCart={order} isHistory={true} />
                ))}
            </div>
        </div>
    )
}

export default Orders
