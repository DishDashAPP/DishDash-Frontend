'use client'

import { FC } from 'react'
import CourierCurrentOrderDetails from '@modules/Courier/Order/CourierCurrentOrderDetails'

const CourierCurrentOrder: FC = () => {
    return (
        <div className="flex flex-col w-full bg-gray-secondary relative">
            <CourierCurrentOrderDetails />
        </div>
    )
}

export default CourierCurrentOrder
