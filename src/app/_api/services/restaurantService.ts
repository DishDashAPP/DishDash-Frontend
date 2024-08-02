import { CATEGORY, FOOD, RESTAURANT_OWNER, RESTAURANT_OWNER_ORDER } from '@api/urls'
import { sendRequest } from '@api/axiosInstance'
import { MenuItem, Order, Price, TChip, User } from '@utils/types'

type TRestaurantOwnerProfile = {
    first_name: string
    last_name: string
    phone_number: string
    restaurant_name: string
    address: string
}

type TCategory = {
    name: string
}

type TFood = {
    name: string
    description: string
    stock: number
    price: Price
    category_id: number
}

export async function getRestaurantActiveOrdersReq() {
    return sendRequest<Order[]>(RESTAURANT_OWNER_ORDER.GET_ACTIVE_ORDERS, 'GET')
}

export async function getRestaurantOrderHistoryReq() {
    return sendRequest<Order[]>(RESTAURANT_OWNER_ORDER.GET_ORDERS, 'GET')
}

export async function updateRestaurantOrderStatusReq(orderId: string, status: string) {
    return sendRequest(RESTAURANT_OWNER_ORDER.UPDATE_ORDER_STATUS(orderId, status), 'POST')
}

export async function getRestaurantProfileReq() {
    return sendRequest<User>(RESTAURANT_OWNER.GET, 'GET')
}

export async function updateRestaurantProfileReq(data: TRestaurantOwnerProfile) {
    return sendRequest(RESTAURANT_OWNER.MODIFY, 'PUT', data)
}

export async function getAllCategoriesReq() {
    return sendRequest<TChip[]>(CATEGORY.GET_ALL, 'GET')
}

export async function getCategoryByIdReq(categoryId: string) {
    return sendRequest(CATEGORY.GET_BY_ID(categoryId), 'GET')
}

export async function createCategoryReq(data: TCategory) {
    return sendRequest(CATEGORY.CREATE, 'POST', data)
}

export async function deleteCategoryReq(categoryId: string) {
    return sendRequest(CATEGORY.DELETE(categoryId), 'DELETE')
}

export async function getAllFoodsReq() {
    return sendRequest<MenuItem[]>(FOOD.GET_ALL, 'GET')
}

export async function getFoodByIdReq(foodId: string) {
    return sendRequest(FOOD.GET_BY_ID(foodId), 'GET')
}

export async function createFoodReq(data: TFood) {
    return sendRequest(FOOD.CREATE, 'POST', data)
}

export async function editFoodReq(foodId: string, data: TFood) {
    return sendRequest(FOOD.EDIT(foodId), 'PUT', data)
}

export async function deleteFoodReq(foodId: string) {
    return sendRequest(FOOD.DELETE(foodId), 'DELETE')
}
