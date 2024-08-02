import {UserType} from "@utils/types";
import {sendRequest} from "@api/axiosInstance";
import {AUTH, CUSTOMER_ORDER} from "@api/urls";

export async function allRestaurantsReq() {
    return sendRequest<RestaurantsReturnType[]>(CUSTOMER_ORDER.GET_ALL_RESTAURANTS, "GET");
}