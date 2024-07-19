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

export type RestaurantIdType = {
    restaurantId: string
}
export type RestaurantIdFoodIdType = {
    restaurantId: string,
    foodId: string
}