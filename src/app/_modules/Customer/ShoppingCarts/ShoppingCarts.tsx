'use client'

import { FC, useEffect, useState } from 'react'
import { ShoppingCartType } from '@utils/types'
import ShoppingCartCard from '@modules/Customer/ShoppingCarts/ShoppingCartCard/ShoppingCartCard'
import { shoppingCartsReq } from '@api/services/customerService'
import { convertShoppingCartsReqAll } from '@utils/converters'
import CustomCircularProgress from '@components/CustomCircularProgress/CustomCircularProgress'

const ShoppingCarts: FC = () => {
    const [shoppingCarts, setShoppingCarts] = useState<ShoppingCartType[] | undefined>(undefined)

    useEffect(() => {
        const fetchShoppingCarts = async () => {
            const response = await shoppingCartsReq()

            if (response.isSuccess)
                setShoppingCarts(convertShoppingCartsReqAll(response.data))
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
