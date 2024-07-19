import {FC} from "react";
import {CustomersRestaurantPageProps} from "@utils/types";
import Restaurant from "@modules/Customer/Restaurant/Restaurant";

const CustomersRestaurantPage: FC<CustomersRestaurantPageProps> = ({params}) => {
    return <Restaurant params={params} />
}

export default CustomersRestaurantPage;