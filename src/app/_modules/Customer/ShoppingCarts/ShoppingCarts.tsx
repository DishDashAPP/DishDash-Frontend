'use client'

import { FC, useEffect, useState } from 'react'
import { RestaurantType, ShoppingCartType } from '@utils/types'
import ShoppingCartCard from '@modules/Customer/ShoppingCarts/ShoppingCartCard/ShoppingCartCard'
import { shoppingCartsReq } from '@api/services/customerService'
import { convertShoppingCartsReqAll } from '@utils/converters'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'
import { useShoppingCart } from '@store/customerStore'

const ShoppingCarts: FC = () => {
    const [shoppingCarts, setShoppingCarts] = useState<ShoppingCartType[] | undefined>(undefined)
    const allRestaurants = useShoppingCart((state) => state.allRestaurants)
    const setAllRestaurants = useShoppingCart((state) => state.setAllRestaurants)

    useEffect(() => {
        const fetchShoppingCarts = async () => {
            const response = await shoppingCartsReq()

            if (response.isSuccess) {
                const tempShoppingCarts = convertShoppingCartsReqAll(response.data, allRestaurants!)
                setShoppingCarts(tempShoppingCarts.filter((shoppingCart) => shoppingCart !== null && shoppingCart.foods.length > 0))
            }
        }

        fetchShoppingCarts()
    }, [])

    return (
        <>
            {shoppingCarts === undefined ?
                <CustomCircularProgress />
                :
                <div className={'px-8 w-full'}>
                    <div className={'text-base font-medium mt-6'}>سبدهای خرید</div>
                    <div className={'mt-3'}>
                        {shoppingCarts.map((shoppingCart, index) => (
                            <ShoppingCartCard key={index} shoppingCart={shoppingCart} />
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default ShoppingCarts
