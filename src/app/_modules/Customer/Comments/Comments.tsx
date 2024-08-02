'use client'

import { FC } from 'react'
import { CommentType, RestaurantIdType, RestaurantType } from '@utils/types'
import Comment from '@modules/Customer/Comments/Comment/Comment'

const Comments: FC<RestaurantIdType> = ({ restaurantId }) => {
    const restaurant: RestaurantType = {
        id: restaurantId,
        username: 'نام کاربری',
        imageSrc: '/RestaurantDefault/restaurant1.svg',
        name: 'اسم رستوران',
        rate: '۴.۵',
        courierPrice: '۱۰۰۰۰',
        WaitingTime: '۳۰',
        rateNumber: '۱۰',
        reviewsNumber: '۱۰',
    }

    const comments: CommentType[] = [
        {
            id: '1',
            imageSrc: '/RestaurantDefault/restaurant1.svg',
            name: 'نام کاربر',
            rate: 4,
            comment: 'غذا بسیار عالی بود و دمای غذا خوب بود ولی مقداری زمان ارسال طولانی بود. در مجموع خوب بود. ',
        },
        {
            id: '1',
            imageSrc: '/RestaurantDefault/restaurant1.svg',
            name: 'نام کاربر',
            rate: 4,
            comment: 'غذا بسیار عالی بود و دمای غذا خوب بود ولی مقداری زمان ارسال طولانی بود. در مجموع خوب بود. ',
        },
        {
            id: '1',
            imageSrc: '/RestaurantDefault/restaurant1.svg',
            name: 'نام کاربر',
            rate: 4,
            comment: 'غذا بسیار عالی بود و دمای غذا خوب بود ولی مقداری زمان ارسال طولانی بود. در مجموع خوب بود. ',
        },
        {
            id: '1',
            imageSrc: '/RestaurantDefault/restaurant1.svg',
            name: 'نام کاربر',
            rate: 4,
            comment: 'غذا بسیار عالی بود و دمای غذا خوب بود ولی مقداری زمان ارسال طولانی بود. در مجموع خوب بود. ',
        },
        {
            id: '1',
            imageSrc: '/RestaurantDefault/restaurant1.svg',
            name: 'نام کاربر',
            rate: 4,
            comment: 'غذا بسیار عالی بود و دمای غذا خوب بود ولی مقداری زمان ارسال طولانی بود. در مجموع خوب بود. ',
        },
        {
            id: '1',
            imageSrc: '/RestaurantDefault/restaurant1.svg',
            name: 'نام کاربر',
            rate: 4,
            comment: 'غذا بسیار عالی بود و دمای غذا خوب بود ولی مقداری زمان ارسال طولانی بود. در مجموع خوب بود. ',
        },
    ]

    return (
        <div className={'w-full'}>
            <div className={'text-base px-8 font-medium mt-6'}>نظرات رستوان {restaurant.name}</div>
            <div className={'mt-3'}>
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </div>
    )
}

export default Comments
