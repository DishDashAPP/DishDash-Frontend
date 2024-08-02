import { FC } from 'react'
import { RestaurantIdFoodIdType } from '@utils/types'
import Food from '@modules/Customer/Food/Food'

type FoodProps = {
    params: RestaurantIdFoodIdType
}

const FoodPage: FC<FoodProps> = ({ params }) => {
    return <Food restaurantId={params.restaurantId} foodId={params.foodId} />
}

export default FoodPage
