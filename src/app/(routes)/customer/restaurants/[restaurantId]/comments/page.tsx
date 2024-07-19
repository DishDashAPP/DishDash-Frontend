import {FC} from "react";
import {RestaurantIdType} from "@utils/types";
import Comments from "@modules/Customer/Comments/Comments";

type CustomersRestaurantPageProps = {
    params: RestaurantIdType
}

const CommentsPage: FC<CustomersRestaurantPageProps> = ({params}) => {
    return <Comments restaurantId={params.restaurantId} />
}

export default CommentsPage;