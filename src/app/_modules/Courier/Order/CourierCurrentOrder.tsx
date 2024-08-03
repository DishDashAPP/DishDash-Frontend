'use client'

import { FC, useEffect, useState } from 'react'
import CourierCurrentOrderDetails from '@modules/Courier/Order/CourierCurrentOrderDetails'
import Map from '@modules/Map/Map'
import { toast } from 'sonner'
import { setDeliveryPersonLocationReq } from '@api/services/deliveryPersonService'
import { TLocation } from '@utils/apiTypes'
import { useGeolocation } from '@reactuses/core'
import { Times } from '@utils/constants'

const CourierCurrentOrder: FC = () => {
    const [position, setPosition] = useState<TLocation | null>(null)
    const geolocation = useGeolocation()

    useEffect(() => {
        const handler = setTimeout(() => {
            if (geolocation.coordinates.latitude && geolocation.coordinates.longitude) {
                const newPosition = {
                    latitude: geolocation.coordinates.latitude,
                    longitude: geolocation.coordinates.longitude,
                }
                setPosition(newPosition)
                setDeliveryPersonLocationReq(newPosition)
                    .then((response) => {})
                    .catch(() => {
                        toast.error('خطایی در به‌روزرسانی موقعیت مکانی رخ داده است.')
                    })
            }
        }, 3 * Times.SECOND)

        return () => clearTimeout(handler)
    }, [geolocation])

    return (
        <div className="flex flex-col w-full bg-gray-secondary relative">
            <div className="flex flex-1 max-w-full max-h-[90vh] overflow-hidden z-0">
                <Map position={position} />
            </div>
            <CourierCurrentOrderDetails />
        </div>
    )
}

export default CourierCurrentOrder
