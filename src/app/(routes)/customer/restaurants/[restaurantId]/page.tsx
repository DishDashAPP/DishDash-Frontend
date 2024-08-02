import { FC } from 'react'
import Restaurant from '@modules/Customer/Restaurant/Restaurant'
import { RestaurantIdType } from '@utils/types'

type CustomersRestaurantPageProps = {
    params: RestaurantIdType
}

const CustomersRestaurantPage: FC<CustomersRestaurantPageProps> = ({ params }) => {
    return <Restaurant restaurantId={params.restaurantId} />
}

export default CustomersRestaurantPage
