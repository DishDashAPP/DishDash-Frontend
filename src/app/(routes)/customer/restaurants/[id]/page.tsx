import {FC} from "react";
import Restaurant from "@modules/Customer/Restaurant/Restaurant";

type CustomersRestaurantPageProps = {
    params: {
        id: string
    }
}

const CustomersRestaurantPage: FC<CustomersRestaurantPageProps> = ({params}) => {
    return <Restaurant id={params.id} />
}

export default CustomersRestaurantPage;