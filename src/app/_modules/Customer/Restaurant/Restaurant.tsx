'use client'

import { FC, useEffect, useState } from 'react'
import { FoodType, MenuType, RestaurantIdType, RestaurantType, ShoppingCartType, TChip } from '@utils/types'
import RestaurantHeader from '@modules/Customer/Restaurant/RestaurantHeader/RestaurantHeader'
import Image from 'next/image'
import CommentsSummary from '@modules/Customer/Restaurant/CommentSummary/CommentsSummary'
import Chips from '@components/Chips/Chips'
import FoodCard1 from '@modules/Customer/Food/FoodCard/FoodCard1'
import Button from '@components/Button/Button'
import { restaurantInfoReq, restaurantMenuReq } from '@api/services/customerService'
import { convertRestaurantInfoResponse, convertRestaurantMenuResponse } from '@utils/converters'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'
import { allCategory } from '@utils/consts'

const Restaurant: FC<RestaurantIdType> = ({ restaurantId }) => {
    const [isDataLoading, setIsDataLoading] = useState<boolean>(true)
    const [restaurant, setRestaurant] = useState<RestaurantType | undefined>(undefined)
    const [menu, setMenu] = useState<MenuType | undefined | null>(undefined)
    const [foods, setFoods] = useState<FoodType[] | undefined>(undefined)
    const [categories, setCategories] = useState<TChip[]>([])
    const [selectedCategory, setSelectedCategory] = useState<TChip>(allCategory)
    const[shoppingCart, setShoppingCart] = useState<ShoppingCartType | undefined>(undefined)


    useEffect(() => {
        const fetchRestaurant = async () => {
            const response = await restaurantInfoReq(restaurantId)
            if (response.isSuccess)
                setRestaurant(convertRestaurantInfoResponse(response.data))
        }

        fetchRestaurant()
    }, [])

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await restaurantMenuReq(restaurantId)

            if (response.isSuccess)
                setMenu(convertRestaurantMenuResponse(response.data))
            else
                setMenu(null)
        }

        fetchMenu()
    }, [])

    useEffect(() => {
        if (restaurant && menu !== undefined)
            setIsDataLoading(false)

        if (menu) {
            setCategories([allCategory].concat(menu.categories))
            setSelectedCategory(allCategory)
            setFoods(menu.foods)
        }
    }, [restaurant, menu])

    function onCategoryChange(category: TChip) {
        setSelectedCategory(category)

        if (category === allCategory)
            setFoods(menu!.foods)
        else
            setFoods(menu!.foods.filter((food) => food.category_id === category.id))
    }

    return (
        <>
            {isDataLoading ? (
                <CustomCircularProgress />
            ) : !menu ? (
                <div className={'error'}>منوی رستوران خالی است.</div>
            ) : (
                <div className={'flex flex-col'}>
                    <div className={'sticky top-[56px] bg-white'}>
                        <Image src={restaurant!.imageSrc} alt={restaurant!.name} width={5000} height={5000} />
                        <div className={'flex flex-col px-8'}>
                            <div className={'font-medium text-lg mt-2'}>{restaurant!.name}</div>
                            <RestaurantHeader restaurant={restaurant!} />
                            <CommentsSummary restaurant={restaurant!} />
                        </div>
                        <div className={'border-t border-gray-line mt-2'} />
                        <div className={'px-8 max-w-[430px]'}>
                            <Chips
                                chips={categories}
                                canAddNewCategory={false}
                                className={'mt-4'}
                                onCategoryChange={onCategoryChange}
                            />
                            <div className={'font-medium text-lg mt-2 mb-3'}>{selectedCategory.name}</div>
                        </div>
                    </div>

                    <div className={'px-8'}>
                        {foods?.length === 0 ?
                            <div className={'error mb-10'}>هیچ غذایی در این دسته‌بندی وجود ندارد.</div>
                            :
                            foods?.map((food, index) => (
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
