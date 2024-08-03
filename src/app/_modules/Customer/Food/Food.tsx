'use client'

import { FC, useEffect, useState } from 'react'
import { FoodPlusCountType, FoodType, RestaurantIdFoodIdType, TChip } from '@utils/types'
import AddFoodButton from '@components/AddFoodButton/AddFoodButton'
import Image from 'next/image'
import { toFarsiNumber } from '@utils/toFarsiNumber'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'
import { getFoodReq, modifyShoppingCartReq, shoppingCartsReq } from '@api/services/customerService'
import { convertGetFoodResponse, convertShoppingCartsReq } from '@utils/converters'
import { allCategory } from '@utils/consts'
import { useShoppingCart } from '@store/customerStore'

const Food: FC<RestaurantIdFoodIdType> = ({ restaurantId, foodId }) => {
    const [food, setFood] = useState<FoodPlusCountType | undefined>(undefined)

    const shoppingCart = useShoppingCart((state) => state.shoppingCart)
    const setShoppingCart = useShoppingCart((state) => state.setShoppingCart)
    const foods = useShoppingCart((state) => state.foods)
    const setFoods = useShoppingCart((state) => state.setFoods)

    const fetchShoppingCarts = async () => {
        const response = await shoppingCartsReq()

        if (response.isSuccess)
            setShoppingCart(convertShoppingCartsReq(response.data, restaurantId))
    }

    useEffect(() => {
        const fetchFood = async () => {
            const response = await getFoodReq(foodId)

            if (response.isSuccess) {
                const findedFood = foods?.find((food) => food.id === foodId)
                setFood({...convertGetFoodResponse(response.data), count: findedFood?.count || 0})
            }
        }

        fetchFood()
    }, [])

    function onChangeFoodCount(id: string, newCount: number) {
        const modifyShoppingCart = async (shoppingCartId: string, foodPlusCount: FoodPlusCountType[]) => {
            const response = await modifyShoppingCartReq(shoppingCartId, foodPlusCount)

            if (response.isSuccess)
                setShoppingCart(convertShoppingCartsReq([response.data], restaurantId))
        }


        if (!shoppingCart)
            return

        let newFoods = foods!.map((food) => {
            if (food.id === id)
                return { ...food, count: newCount }
            return food
        })
        newFoods = newFoods.filter((food) => food.count > 0)

        modifyShoppingCart(shoppingCart.id, newFoods)
        fetchShoppingCarts()
    }

    return (
        <>
            {food === undefined ?
                <CustomCircularProgress />
                :
                <div className={'flex flex-col w-full justify-between items-center mb-5'}>
                    <div className={'flex flex-col items-center mt-6'}>
                        <div className={'font-medium text-lg'}>جزئیات محصول</div>
                        <Image src={food.imageSrc} alt={food.name} width={5000} height={5000} className={'mt-3'} />
                        <div className={'flex flex-col w-full items-start mt-6'}>
                            <div className={'text-lg text-black'}>{food.name}</div>
                            <div className={'mt-2 text-gray-tertiary'}>{food.description}</div>
                            <div className={'mt-8'}>
                                <span className={'text-lg font-medium'}>{toFarsiNumber(food.price / 1000)}</span>
                                <span> هزار تومان</span>
                            </div>
                        </div>
                    </div>
                    <AddFoodButton
                        restaurantId={restaurantId}
                        foodId={foodId}
                        count={food.count}
                        onChangeFoodCount={onChangeFoodCount}
                        simpleClassName={'w-4/5 mx-auto h-12'}
                        addClassName={'h-12 text-xl -mt-5'}
                    />
                </div>
            }
        </>
    )
}

export default Food
