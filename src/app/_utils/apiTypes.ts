export type RestaurantsResponseType = {
    id: string,
    username: string,
    address: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    restaurant_name: string,
    restaurant_comments: {
        avg: number,
        number_of_rate: number,
        number_of_review: number
    }
}

type CategoryResponseType = {
    id: number
    name: string
}

type FoodResponseType = {
    name: string
    description: string
    stock: number
    price: {
        amount: number
        unit: string
    }
    category_id: number
}

export type RestaurantMenuResponseType = {
    id: string
    restaurant_id: string
    categories: CategoryResponseType[]
    foods: FoodResponseType[]
}