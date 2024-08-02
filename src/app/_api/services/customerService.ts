import {sendRequest} from "@api/axiosInstance";
import {CUSTOMER_ORDER, MENU} from "@api/urls";
import {RestaurantMenuResponseType, RestaurantsResponseType} from "@utils/apiTypes";

export async function allRestaurantsReq() {
    return sendRequest<RestaurantsResponseType[]>(CUSTOMER_ORDER.GET_ALL_RESTAURANTS, "GET");
}

export async function restaurantInfoReq(restaurantId: string) {
    return sendRequest<RestaurantsResponseType>(CUSTOMER_ORDER.GET_RESTAURANT(restaurantId), "GET");
}

export async function restaurantMenuReq(restaurantId: string) {
    return sendRequest<RestaurantMenuResponseType>(MENU.GET_BY_RESTAURANT_ID(restaurantId), "GET");
}