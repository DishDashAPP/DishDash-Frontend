import {UserType} from "@utils/types";
import {sendRequest} from "@api/axiosInstance";
import {AUTH, CUSTOMER_ORDER} from "@api/urls";
import {RestaurantsResponseType} from "@utils/apiTypes";

export async function allRestaurantsReq() {
    return sendRequest<RestaurantsResponseType[]>(CUSTOMER_ORDER.GET_ALL_RESTAURANTS, "GET");
}