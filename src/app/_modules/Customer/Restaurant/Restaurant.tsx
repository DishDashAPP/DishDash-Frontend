'use client'

import { FC, useEffect, useState } from 'react'
import { MenuType, RestaurantIdType, RestaurantType, TChip } from '@utils/types'
import RestaurantHeader from '@modules/Customer/Restaurant/RestaurantHeader/RestaurantHeader'
import Image from 'next/image'
import CommentsSummary from '@modules/Customer/Restaurant/CommentSummary/CommentsSummary'
import Chips from '@components/Chips/Chips'
import FoodCard1 from '@modules/Customer/Food/FoodCard/FoodCard1'
import Button from '@components/Button/Button'
import { restaurantInfoReq, restaurantMenuReq } from '@api/services/customerService'
import { convertRestaurantInfoResponse, convertRestaurantMenuResponse } from '@utils/converters'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'

const Restaurant: FC<RestaurantIdType> = ({ restaurantId }) => {
    const [isDataLoading, setIsDataLoading] = useState<boolean>(true)
    const [restaurant, setRestaurant] = useState<RestaurantType | undefined>(undefined)
    const [menu, setMenu] = useState<MenuType | undefined>(undefined)
    const [selectedCategory, setSelectedCategory] = useState<TChip>({
        id: 0,
        name: 'همه',
    })

    useEffect(() => {
        const fetchRestaurant = async () => {
            const response = await restaurantInfoReq(restaurantId)
            if (response.isSuccess) setRestaurant(convertRestaurantInfoResponse(response.data))
        }

        fetchRestaurant()
    }, [])

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await restaurantMenuReq(restaurantId)
            if (response.isSuccess) setMenu(convertRestaurantMenuResponse(response.data))
            else setMenu({} as MenuType)
        }

        fetchMenu()
    }, [])

    useEffect(() => {
        if (restaurant && menu) setIsDataLoading(false)
    }, [restaurant, menu])

    function onCategoryChange(category: TChip) {
        setSelectedCategory(category)
    }

    return (
        <>
            {isDataLoading ? (
                <CustomCircularProgress />
            ) : menu === ({} as MenuType) ? (
                <div className={'error'}>منوی رستوران خالی است.</div>
            ) : (
                <div className={'flex flex-col'}>
                    <div className={'sticky top-[56px] bg-white'}>
                        <Image src={restaurant!.imageSrc} alt={restaurant!.name} width={5000} height={5000} />
                        <div className={'flex flex-col px-8'}>
                            <div className={'font-medium text-lg mt-2'}>{restaurant!.name}</div>
                            <RestaurantHeader restaurant={restaurant!} />
                            <CommentsSummary restaurantId={restaurantId} />
                        </div>
                        <div className={'border-t border-gray-line mt-2'} />
                        <div className={'px-8 max-w-[430px]'}>
                            <Chips
                                chips={menu!.categories}
                                canAddNewCategory={false}
                                className={'mt-4'}
                                onCategoryChange={onCategoryChange}
                            />
                            <div className={'font-medium text-lg mt-2 mb-3'}>{selectedCategory.name}</div>
                        </div>
                    </div>

                    <div className={'px-8'}>
                        {menu!.foods.map((food, index) => (
                            <FoodCard1 key={index} restaurantId={restaurantId} food={food} />
                        ))}
                    </div>

                    <Button label={'تکمیل خرید'} className={'sticky bottom-[85px] w-4/5 mx-auto'} />
                </div>
            )}
        </>
    )
}

export default Restaurant
