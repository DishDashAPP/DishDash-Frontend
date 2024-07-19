import {FC} from "react";
import Restaurant from "@modules/Customer/Restaurant/Restaurant";
import {restaurantIdType} from "@utils/types";

type CustomersRestaurantPageProps = {
    params: restaurantIdType
}

const CustomersRestaurantPage: FC<CustomersRestaurantPageProps> = ({params}) => {
    return <Restaurant restaurantId={params.restaurantId} />
}

export default CustomersRestaurantPage;