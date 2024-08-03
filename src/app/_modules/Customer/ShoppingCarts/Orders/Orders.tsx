'use client'

import { FC } from 'react'
import ShoppingCartCard from '@modules/Customer/ShoppingCarts/ShoppingCartCard/ShoppingCartCard'
import { CustomerOrderType } from '@utils/types'

const Orders: FC = () => {
    const orders: CustomerOrderType[] = [
        {
            id: '1',
            restaurantId: '1',
            restaurantUsername: 'نام کاربری رستوران',
            restaurantName: 'نام رستوران',
            restaurantRate: '۴.۵',
            foods: [
                {
                    id: '1',
                    imageSrc: '/FoodDefault/food4.svg',
                    name: 'پاستا گوجه',
                    description: 'سس گوجه، گوشت چرخ‌کرده، پنیر موزارلا،‌ فلفل قرمز',
                    price: 250,
                    count: 2,
                    category_id: 0,
                },
                {
                    id: '2',
                    imageSrc: '/FoodDefault/food4.svg',
                    name: 'پاستا پستو',
                    description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
                    price: 250,
                    count: 3,
                    category_id: 0,
                },
            ],
        },
        {
            id: '2',
            restaurantId: '1',
            restaurantUsername: 'نام کاربری رستوران',
            restaurantName: 'نام رستوران',
            restaurantRate: '۴.۵',
            foods: [
                {
                    id: '1',
                    imageSrc: '/FoodDefault/food4.svg',
                    name: 'پاستا گوجه',
                    description: 'سس گوجه، گوشت چرخ‌کرده، پنیر موزارلا،‌ فلفل قرمز',
                    price: 250,
                    count: 2,
                    category_id: 0,
                },
                {
                    id: '2',
                    imageSrc: '/FoodDefault/food4.svg',
                    name: 'پاستا پستو',
                    description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
                    price: 250,
                    count: 30,
                    category_id: 0,
                },
            ],
        },
    ]

    return (
        <div className={'px-8 w-full'}>
            <div className={'text-base font-medium mt-6'}>سفارش‌ها</div>
            <div className={'mt-3'}>
                {orders.map((order, index) => (
                    <ShoppingCartCard key={index} shoppingCart={order} isHistory={true} />
                ))}
            </div>
        </div>
    )
}

export default Orders
