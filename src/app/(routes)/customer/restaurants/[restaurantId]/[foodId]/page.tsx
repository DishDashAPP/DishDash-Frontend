import {FC} from "react";
import {restaurantIdFoodIdType} from "@utils/types";
import Food from "@modules/Customer/Food/Food";

type FoodProps = {
    params: restaurantIdFoodIdType
}

const FoodPage: FC<FoodProps> = ({params}) => {
    return <Food restaurantId={params.restaurantId} foodId={params.foodId}/>
}

export default FoodPage;