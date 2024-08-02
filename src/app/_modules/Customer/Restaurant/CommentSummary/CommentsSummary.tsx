'use client'

import { FC } from 'react'
import { RestaurantType } from '@utils/types'
import CHAT from '@public/chat.svg'
import LEFT_ARROW from '@public/left-arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import { COMMENTS, CUSTOMER_RESTAURANTS } from '@utils/links'

const CommentsSummary: FC<{ restaurant: RestaurantType }> = ({ restaurant }) => {
    return (
        <div className={'flex justify-between mt-6 text-sm text-primary'}>
            <div>
                <Image src={CHAT} alt={'chat'} width={16} height={16} className={'inline-block ml-2'} />
                {restaurant.reviewsNumber === '۰' ?
                    <span className={'text-black text-red'}>هنوز نظری ثبت نشده است.</span>
                    :
                    <>
                        <span className={'text-black'}>{restaurant.reviewsNumber}</span>
                        <span className={'text-gray-tertiary'}> نظر</span>
                    </>
                }
            </div>

            {restaurant.reviewsNumber !== '۰' &&
                <Link href={CUSTOMER_RESTAURANTS + '/' + restaurant.id + '/' + COMMENTS} className={'flex'}>
                <span>مشاهده‌ی نظرات</span>
                <Image src={LEFT_ARROW} alt={'left arrow'} width={16} height={16} className={'inline-block'} />
            </Link>
            }
        </div>
    )
}

export default CommentsSummary
