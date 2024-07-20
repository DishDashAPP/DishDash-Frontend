export type UserType = 'customer' | 'restaurant' | 'courier';
export type OrderType = 'active' | 'completed';
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
export type ShoppingCartType = {
    id: string,
    restaurantId: string,
    restaurantName: string,
    restaurantRate: string,
    foods: (FoodType & {
        count: number
    })[],
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
export type ShoppingCartIdType = {
    shoppingCartId: string
}