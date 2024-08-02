'use client'

import { FC } from 'react'
import Image from 'next/image'
import Rate from '@components/Rate/Rate'
import { RestaurantType } from '@utils/types'
import { CUSTOMER_RESTAURANTS } from '@utils/links'
import Link from 'next/link'

const RestaurantCard: FC<{ restaurant: RestaurantType }> = ({ restaurant }) => {
    return (
        <Link href={CUSTOMER_RESTAURANTS + '/' + restaurant.id}>
            <div className={'cursor-pointer mt-8 mb-4'}>
                <Image
                    src={restaurant.imageSrc}
                    alt={restaurant.name}
                    width={5000}
                    height={5000}
                    className={'rounded'}
                />
                <div className={'flex justify-between items-center mt-2'}>
                    <div className={'text-sm font-medium'}>
                        {restaurant.name}
                        <div className={'text-gray-secondary text-xs font-normal mt-1'}>
                            <span>پیک رستوران </span>
                            <span>{restaurant.courierPrice} تومان</span>
                            <span> تا </span>
                            <span>{restaurant.WaitingTime} دقیقه</span>
                        </div>
                    </div>
                    <Rate rate={restaurant.rate} />
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard
