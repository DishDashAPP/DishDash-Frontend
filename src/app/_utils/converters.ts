import { RestaurantMenuResponseType, RestaurantsResponseType } from '@utils/apiTypes'
import { MenuType, RestaurantType } from '@utils/types'
import { toFarsiNumber } from '@utils/toFarsiNumber'

function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(getRandomFloat(min, max))
}

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
    return allRestaurantsResponse.map((restaurant) => ({
        id: restaurant.id,
        username: restaurant.username,
        imageSrc: `/RestaurantDefault/restaurant${getIntHash(restaurant.username, 1, 4)}.svg`,
        name: restaurant.restaurant_name,
        rate: toFarsiNumber(Number(Number(restaurant.restaurant_comments.avg).toFixed(2))),
        courierPrice: toFarsiNumber(getRandomInt(1, 10) * 10000),
        WaitingTime: toFarsiNumber(getRandomInt(1, 10) * 5),
    }))
}

export function convertRestaurantInfoResponse(restaurantInfoResponse: RestaurantsResponseType): RestaurantType {
    return convertAllRestaurantsResponse([restaurantInfoResponse])[0]
}

export function convertRestaurantMenuResponse(restaurantMenuResponse: RestaurantMenuResponseType): MenuType {
    return {
        categories: restaurantMenuResponse.categories.map((category) => ({
            id: Number(category.id),
            name: category.name,
        })),
        foods: restaurantMenuResponse.foods.map((food) => ({
            imageSrc: `/FoodDefault/food${getIntHash(food.name, 1, 4)}.svg`,
            name: food.name,
            description: food.description,
            price: toFarsiNumber(food.price.amount),
            category_id: food.category_id,
        })),
    }
}
