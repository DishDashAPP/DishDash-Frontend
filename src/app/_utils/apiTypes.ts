import { Price, UserType } from '@utils/types'

export type RestaurantsResponseType = {
    id: string
    username: string
    address: string
    first_name: string
    last_name: string
    phone_number: string
    restaurant_name: string
    restaurant_comments: {
        avg: number
        number_of_rate: number
        number_of_review: number
    }
}

type CategoryResponseType = {
    id: number
    name: string
}

export type FoodResponseType = {
    id: number
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

export type ShoppingCartItemResponseType = {
    name: string
    description: string
    price: {
        amount: number
        unit: string
    }
    quantity: number
    shopping_cart_id: number
    food_id: number
}

export type ShoppingCartResponseType = {
    id: number
    customer_id: number
    restaurant_owner_id: number
    shopping_cart_items: ShoppingCartItemResponseType[]
    total_price: {
        amount: number
        unit: string
    }
}

export type TCourierProfile = {
    first_name: string
    last_name: string
    phone_number: string
    address: string
}

export type TLoginRes = {
    token: string
    role: UserType
}

export type TDeliveryPersonProfile = {
    first_name: string
    last_name: string
    phone_number: string
}

export type TRestaurantOwnerProfile = {
    first_name: string
    last_name: string
    phone_number: string
    restaurant_name: string
    address: string
}

export type TCategory = {
    name: string
}

export type TFood = {
    name: string
    description: string
    stock: number
    price: Price
    category_id: number
}

export type TLocation = {
    latitude: number
    longitude: number
}
