import {FC} from "react";
import {ShoppingCartIdType} from "@utils/types";
import ShoppingCart from "@modules/Customer/ShoppingCarts/ShoppingCart/ShoppingCart";

type ShoppingCartPageProps = {
    params: ShoppingCartIdType
}

const ShoppingCartPage: FC<ShoppingCartPageProps> = ({params}) => {
    return <ShoppingCart shoppingCartId={params.shoppingCartId} />
}

export default ShoppingCartPage;