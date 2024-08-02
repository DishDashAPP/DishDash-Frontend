import {RestaurantsResponseType} from "@utils/apiTypes";
import {RestaurantType} from "@utils/types";
import {toFarsiNumber} from "@utils/toFarsiNumber";

function getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min: number, max: number): number {
    return Math.floor(getRandomFloat(min, max));
}

export function convertAllRestaurantsResponse(allRestaurantsResponse: RestaurantsResponseType[]): RestaurantType[] {
    return allRestaurantsResponse.map(restaurant => ({
        id: restaurant.id,
        imageSrc: `/RestaurantDefault/restaurant${getRandomInt(1, 4)}.svg`,
        name: restaurant.restaurant_name,
        rate: toFarsiNumber(restaurant.restaurant_comments.avg),
        courierPrice: toFarsiNumber(getRandomInt(1, 10) * 10000),
        WaitingTime: toFarsiNumber(getRandomInt(1, 10) * 5)
    }));
}