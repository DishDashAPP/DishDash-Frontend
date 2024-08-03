import {
    FoodResponseType,
    RestaurantMenuResponseType,
    RestaurantsResponseType,
    ShoppingCartItemResponseType,
    ShoppingCartResponseType,
} from '@utils/apiTypes'
import { FoodType, MenuType, RestaurantType, ShoppingCartType } from '@utils/types'
import { toFarsiNumber } from '@utils/toFarsiNumber'
import Restaurant from '@modules/Customer/Restaurant/Restaurant'

function getFloatHash(str: string, min: number, max: number): number {
    let hash = 0

    if (str.length === 0) return hash

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = (hash << 5) - hash + char
        hash = hash & hash
    }

    return (Math.abs(hash) % (max - min)) + min
}

function getIntHash(str: string, min: number, max: number): number {
    return Math.floor(getFloatHash(str, min, max))
}

export function convertAllRestaurantsResponse(allRestaurantsResponse: RestaurantsResponseType[]): RestaurantType[] {
    return allRestaurantsResponse
        .sort((a, b) => Number(a.id) - Number(b.id))
        .map((restaurant) => ({
            id: restaurant.id,
            username: restaurant.username,
            imageSrc: `/RestaurantDefault/restaurant${getIntHash(restaurant.username, 1, 4)}.svg`,
            name: restaurant.restaurant_name,
            rate: toFarsiNumber(Number(Number(restaurant.restaurant_comments.avg).toFixed(2))),
            rateNumber: toFarsiNumber(restaurant.restaurant_comments.number_of_rate),
            reviewsNumber: toFarsiNumber(restaurant.restaurant_comments.number_of_review),
            courierPrice: toFarsiNumber(getIntHash(restaurant.username, 1, 10) * 10000),
            WaitingTime: toFarsiNumber(getIntHash(restaurant.username, 1, 10) * 5),
        }))
}

export function convertRestaurantInfoResponse(restaurantInfoResponse: RestaurantsResponseType): RestaurantType {
    return convertAllRestaurantsResponse([restaurantInfoResponse])[0]
}

export function convertRestaurantMenuResponse(restaurantMenuResponse: RestaurantMenuResponseType): MenuType {
    return {
        categories: restaurantMenuResponse.categories
            .sort((a, b) => a.id - b.id)
            .map((category) => ({
                id: category.id,
                name: category.name,
            })),
        foods: restaurantMenuResponse.foods.map((food) => ({
            id: food.id.toString(),
            imageSrc: `/FoodDefault/food${getIntHash(food.name, 1, 4)}.svg`,
            name: food.name,
            description: food.description,
            price: food.price.amount,
            category_id: food.category_id,
        })),
    }
}

export function convertGetFoodResponse(foodResponse: FoodResponseType): FoodType {
    return {
        id: foodResponse.id.toString(),
        imageSrc: `/FoodDefault/food${getIntHash(foodResponse.name, 1, 4)}.svg`,
        name: foodResponse.name,
        description: foodResponse.description,
        price: foodResponse.price.amount,
        category_id: foodResponse.category_id,
    }
}

export function convertCreateShoppingCartResponse(shoppingCartResponse: ShoppingCartResponseType): ShoppingCartType {
    return {
        id: shoppingCartResponse.id.toString(),
        restaurantId: shoppingCartResponse.restaurant_owner_id.toString(),
        restaurantUsername: shoppingCartResponse.restaurant_owner.username,
        restaurantName: shoppingCartResponse.restaurant_owner.restaurant_name,
        restaurantRate: toFarsiNumber(shoppingCartResponse.restaurant_owner.restaurant_comments.avg),
        foods: shoppingCartResponse.shopping_cart_items.map((food) => ({
            id: food.food_id.toString(),
            name: food.name,
            description: food.description,
            imageSrc: `/FoodDefault/food${getIntHash(food.name, 1, 4)}.svg`,
            category_id: 1,
            price: food.price.amount,
            count: food.quantity,
        })),
        total: toFarsiNumber(shoppingCartResponse.total_price.amount),
        deliveryPrice: toFarsiNumber(getIntHash(shoppingCartResponse.id.toString(), 1, 10) * 10000),
        finalPrice: toFarsiNumber(shoppingCartResponse.total_price.amount + getIntHash(shoppingCartResponse.id.toString(), 1, 10) * 10000),
    }
}

export function convertShoppingCartsReqAll(shoppingCartsResponse: ShoppingCartResponseType[]): ShoppingCartType[] {
    const shoppingCarts = shoppingCartsResponse.map((shoppingCart) => {
            const total = shoppingCart.total_price.amount
            const deliveryPrice = getIntHash(shoppingCart.id.toString(), 1, 10) * 10000
            const finalPrice = total + deliveryPrice


            return {
                id: shoppingCart.id.toString(),
                restaurantId: shoppingCart.restaurant_owner_id.toString(),
                restaurantUsername: shoppingCart.restaurant_owner.username,
                restaurantName: shoppingCart.restaurant_owner.restaurant_name,
                restaurantRate: toFarsiNumber(shoppingCart.restaurant_owner.restaurant_comments.avg),
                foods: shoppingCart.shopping_cart_items.map((food) => ({
                    id: food.food_id.toString(),
                    name: food.name,
                    description: food.description,
                    imageSrc: `/FoodDefault/food${getIntHash(food.name, 1, 4)}.svg`,
                    category_id: 1,
                    price: food.price.amount,
                    count: food.quantity,
                })),
                total: toFarsiNumber(total),
                deliveryPrice: toFarsiNumber(deliveryPrice),
                finalPrice: toFarsiNumber(finalPrice),
            }
        },
    )

    return shoppingCarts.filter((shoppingCart) => shoppingCart !== null) as ShoppingCartType[]
}

export function convertShoppingCartsReq(shoppingCarts: ShoppingCartResponseType[], restaurantId: string): ShoppingCartType | null {
    const shoppingCart = shoppingCarts.find((cart: ShoppingCartResponseType) =>
        cart.restaurant_owner_id.toString() === restaurantId)
    if (!shoppingCart)
        return null

    const total = shoppingCart.total_price.amount
    const deliveryPrice = getIntHash(shoppingCart.id.toString(), 1, 10) * 10000
    const finalPrice = total + deliveryPrice

    return {
        id: shoppingCart.id.toString(),
        restaurantId: shoppingCart.restaurant_owner_id.toString(),
        restaurantUsername: shoppingCart.restaurant_owner.id,
        restaurantName: shoppingCart.restaurant_owner.restaurant_name,
        restaurantRate: toFarsiNumber(shoppingCart.restaurant_owner.restaurant_comments.avg),
        foods: shoppingCart.shopping_cart_items.map((food: ShoppingCartItemResponseType) => ({
            id: food.food_id.toString(),
            name: food.name,
            description: food.description,
            imageSrc: `/FoodDefault/food${getIntHash(food.name, 1, 4)}.svg`,
            category_id: 1,
            price: food.price.amount,
            count: food.quantity,
        })),
        total: toFarsiNumber(total),
        deliveryPrice: toFarsiNumber(deliveryPrice),
        finalPrice: toFarsiNumber(finalPrice),
    }
}

export function convertShoppingCartsOnShoppingCartIdReq(shoppingCarts: ShoppingCartResponseType[], shoppingCartId: string): ShoppingCartType | undefined {
    const shoppingCart = shoppingCarts.find((cart: ShoppingCartResponseType) =>
        cart.id.toString() === shoppingCartId)

    if (!shoppingCart)
        return undefined

    const total = shoppingCart.total_price.amount
    const deliveryPrice = getIntHash(shoppingCart.id.toString(), 1, 10) * 10000
    const finalPrice = total + deliveryPrice

    return {
        id: shoppingCart.id.toString(),
        restaurantId: shoppingCart.restaurant_owner_id.toString(),
        restaurantUsername: shoppingCart.restaurant_owner.id,
        restaurantName: shoppingCart.restaurant_owner.restaurant_name,
        restaurantRate: toFarsiNumber(shoppingCart.restaurant_owner.restaurant_comments.avg),
        foods: shoppingCart.shopping_cart_items.map((food: ShoppingCartItemResponseType) => ({
            id: food.food_id.toString(),
            name: food.name,
            description: food.description,
            imageSrc: `/FoodDefault/food${getIntHash(food.name, 1, 4)}.svg`,
            category_id: 1,
            price: food.price.amount,
            count: food.quantity,
        })),
        total: toFarsiNumber(total),
        deliveryPrice: toFarsiNumber(deliveryPrice),
        finalPrice: toFarsiNumber(finalPrice),
    }
}