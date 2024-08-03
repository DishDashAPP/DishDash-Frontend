'use client'

import { FC, useEffect, useState } from 'react'
import { ShoppingCartIdType, ShoppingCartType } from '@utils/types'
import FoodCard2 from '@modules/Customer/Food/FoodCard/FoodCard2'
import Button from '@components/Button/Button'
import { createOrderReq, createShoppingCartReq } from '@api/services/customerService'
import { convertCreateShoppingCartResponse, convertShoppingCartsReq } from '@utils/converters'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'

const ShoppingCart: FC<ShoppingCartIdType> = ({ shoppingCartId }) => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCartType | undefined>(undefined)

    useEffect(() => {
        const createShoppingCart = async (restaurantId: string) => {
            const response = await createShoppingCartReq(restaurantId)

            if (response.isSuccess)
                setShoppingCart(convertCreateShoppingCartResponse(response.data))
        }

        createShoppingCart(shoppingCartId)
    }, [])

    function onPayment() {
        if (shoppingCart === undefined)
            return

        console.log(shoppingCart)
        const a = createOrderReq(shoppingCart.restaurantId, shoppingCartId)
    }

    return (
        <>
            {shoppingCart === undefined ?
                <CustomCircularProgress />
                :
                <div className={'flex flex-col w-full justify-between'}>
                    <div>
                        <div className={'px-8 text-base font-medium mt-6'}>سبد خرید
                            رستوران {shoppingCart.restaurantName}</div>
                        <div className={'mt-3'}>
                            {shoppingCart.foods.map((food, index) => (
                                <FoodCard2 key={index} restaurantId={shoppingCart.restaurantId} food={food} />
                            ))}
                        </div>

                        <div className={'px-8 mt-8 mb-6 text-black text-sm font-normal'}>
                            <div className={'flex justify-between'}>
                                <span>جمع سفارش</span>
                                <div>
                                    <span>{shoppingCart.total}</span>
                                    <span className={'text-xs'}> تومان</span>
                                </div>
                            </div>

                            <div className={'flex justify-between mt-4'}>
                                <span>هزینه‌ی ارسال</span>
                                <div>
                                    <span>{shoppingCart.deliveryPrice}</span>
                                    <span className={'text-xs'}> تومان</span>
                                </div>
                            </div>

                            <div className={'flex justify-between mt-4 text-base font-medium'}>
                                <span>هزینه‌ی ارسال</span>
                                <div>
                                    <span>{shoppingCart.deliveryPrice}</span>
                                    <span className={'text-sm font-normal'}> تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button label={'پرداخت'} className={'sticky bottom-[85px] w-4/5 mx-auto'} onClick={onPayment}/>
                </div>
            }
        </>
    )
}

export default ShoppingCart
