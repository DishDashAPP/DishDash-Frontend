'use client'

import { FC, useEffect, useState } from 'react'
import RestaurantCard from '@modules/Customer/AllRestaurants/RestaurantCard/RestaurantCard'
import { RestaurantType } from '@utils/types'
import { allRestaurantsReq } from '@api/services/customerService'
import { convertAllRestaurantsResponse } from '@utils/converters'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'

const AllRestaurant: FC = () => {
    const [isAllRestaurantsLoading, setIsAllRestaurantsLoading] = useState<boolean>(true)
    const [allRestaurants, setAllRestaurants] = useState<RestaurantType[] | undefined>(undefined)

    useEffect(() => {
        const fetchAllRestaurants = async () => {
            const response = await allRestaurantsReq()

            if (response.isSuccess) setAllRestaurants(convertAllRestaurantsResponse(response.data))
            else setAllRestaurants([])
        }

        fetchAllRestaurants()
    }, [])

    useEffect(() => {
        if (allRestaurants) setIsAllRestaurantsLoading(false)
    }, [allRestaurants])

    return (
        <>
            {isAllRestaurantsLoading ? (
                <CustomCircularProgress />
            ) : (
                <div className={'mt-6 w-full px-8'}>
                    <span className={'text-xl font-medium'}>رستوران‌ها</span>
                    {allRestaurants?.length === 0 && <div className={'error'}>رستورانی وجود ندارد</div>}
                    <div className={'w-full mt-10'}>
                        {allRestaurants?.map((restaurant, index) => (
                            <RestaurantCard key={index} restaurant={restaurant} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default AllRestaurant
