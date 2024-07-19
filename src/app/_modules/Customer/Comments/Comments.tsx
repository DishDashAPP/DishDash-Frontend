'use client'

import {FC} from "react";
import {RestaurantIdType} from "@utils/types";

const Comments: FC<RestaurantIdType> = ({restaurantId}) => {
    return <div>{restaurantId}</div>
}

export default Comments;