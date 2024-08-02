'use client'

import { RestaurantType } from '@utils/types'
import { FC } from 'react'
import STAR from '@public/star-gray.svg'
import COURIER from '@public/courier.svg'
import WATCH from '@public/watch.svg'
import RestaurantHeaderPart from '@modules/Customer/Restaurant/RestaurantHeader/RestaurantHeaderPart'

const RestaurantHeader: FC<{ restaurant: RestaurantType }> = ({ restaurant }) => {
    return (
        <div className={'grid grid-cols-3 mt-6 bg-gray-line gap-x-0.5'}>
            <RestaurantHeaderPart
                title={[restaurant.rate, ' از ', '۵']}
                subtitle={[' از ', '۲۱۷۰ ', 'امتیاز']}
                iconSrc={STAR}
                iconAlt={'gray star'}
            />
            <RestaurantHeaderPart
                title={[restaurant.courierPrice, ' تومان']}
                subtitle={[' هزینه‌ی پیک']}
                iconSrc={COURIER}
                iconAlt={'courier'}
            />
            <RestaurantHeaderPart
                title={['تا ', restaurant.WaitingTime, ' دقیقه']}
                subtitle={[' زمان تحویل']}
                iconSrc={WATCH}
                iconAlt={'watch'}
            />
        </div>
    )
}

export default RestaurantHeader
