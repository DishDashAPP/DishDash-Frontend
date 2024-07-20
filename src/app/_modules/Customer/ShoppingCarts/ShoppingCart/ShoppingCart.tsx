'use client'

import {FC} from "react";
import {ShoppingCartIdType} from "@utils/types";

const ShoppingCart: FC<ShoppingCartIdType> = ({shoppingCartId}) => {
    return (
        <div>
            ShoppingCart {shoppingCartId}
        </div>
    )
}

export default ShoppingCart;