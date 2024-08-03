import { sendRequest } from '@api/axiosInstance'
import { CUSTOMER, CUSTOMER_ORDER, MENU, FOOD } from '@api/urls'
import {
    RestaurantMenuResponseType,
    RestaurantsResponseType,
    ShoppingCartResponseType,
    TCourierProfile,
    FoodResponseType,
} from '@utils/apiTypes'
import { FoodPlusCountType, User } from '@utils/types'

export async function allRestaurantsReq() {
    return sendRequest<RestaurantsResponseType[]>(CUSTOMER_ORDER.GET_ALL_RESTAURANTS, 'GET')
}

export async function restaurantInfoReq(restaurantId: string) {
    return sendRequest<RestaurantsResponseType>(CUSTOMER_ORDER.GET_RESTAURANT(restaurantId), 'GET')
}

export async function restaurantMenuReq(restaurantId: string) {
    return sendRequest<RestaurantMenuResponseType>(MENU.GET_BY_RESTAURANT_ID(restaurantId), 'GET')
}

export async function getFoodReq(foodId: string) {
    return sendRequest<FoodResponseType>(FOOD.CUSTOMER_GET_BY_ID(foodId), 'GET')
}

export async function shoppingCartsReq() {
    return sendRequest<ShoppingCartResponseType[]>(CUSTOMER_ORDER.GET_SHOPPING_CARTS, 'GET')
}

export async function createShoppingCartReq(restaurantId: string) {
    return sendRequest<ShoppingCartResponseType>(CUSTOMER_ORDER.CREATE_SHOPPING_CART(restaurantId), 'POST', [])
}

export async function modifyShoppingCartReq(shoppingCartId: string, foodPlusCount: FoodPlusCountType[]) {
    const requestData = foodPlusCount.map((item) => ({
        food_id: item.id,
        price: {
            amount: item.price,
            currency: 'TOMAN',
        },
        quantity: item.count,
    }))
    console.log('requestData', requestData)

    return sendRequest<ShoppingCartResponseType>(
        CUSTOMER_ORDER.MODIFY_SHOPPING_CART(shoppingCartId),
        'POST',
        requestData
    )
}

export async function getCustomerProfileReq() {
    return sendRequest<User>(CUSTOMER.GET, 'GET')
}

export async function updateCustomerProfileReq(data: TCourierProfile) {
    return sendRequest(CUSTOMER.MODIFY, 'PUT', data)
}

export async function getCustomerCurrentOrderReq() {
    return sendRequest(CUSTOMER_ORDER.GET_CUSTOMER_CURRENT_ORDER, 'GET')
}
