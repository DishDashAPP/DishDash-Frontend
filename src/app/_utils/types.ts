export type UserType = 'CUSTOMER' | 'RESTAURANT_OWNER' | 'DELIVERY_PERSON';
export type OrderType = 'active' | 'completed';
export type User = {
    id: number,
    address?: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    restaurant_name?: string
}
export type OrderItem = {
    id: number,
    price: number,
    status: string,
    createdAt: string,
    user: {
        name: string
    }
}
export type MenuItem = {
    id: number,
    title: string,
    description: string,
    price: number,
    isAvailable: boolean,
    category: string
}
export type TChip = {
    title: string
    value: string
}
export type RestaurantType = {
    id: string,
    imageSrc: string,
    name: string,
    rate: string,
    courierPrice: string,
    WaitingTime: string
}
export type FoodType = {
    id: string,
    imageSrc: string,
    name: string,
    description: string,
    price: string
}
export type CommentType = {
    id: string,
    imageSrc: string,
    name: string,
    rate: number,
    comment: string
}
export type CustomerOrderType = {
    id: string,
    restaurantId: string,
    restaurantName: string,
    restaurantRate: string,
    foods: (FoodType & {
        count: number
    })[],
}
export type ShoppingCartType = CustomerOrderType & {
    total: string,
    deliveryPrice: string,
    finalPrice: string
}

export type RestaurantIdType = {
    restaurantId: string
}
export type RestaurantIdFoodIdType = {
    restaurantId: string,
    foodId: string
}
export type RestaurantIdFoodType = {
    restaurantId: string,
    food: FoodType
}
export type ShoppingCartIdType = {
    shoppingCartId: string
}