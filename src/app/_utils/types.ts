export type userType = 'customer' | 'restaurant' | 'courier';
export type orderType = 'active' | 'completed';
export type orderItem = {
    id: number,
    price: number,
    status: string,
    createdAt: string,
    user: {
        name: string
    }
}
export type menuItem = {
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

export type restaurantIdType = {
    restaurantId: string
}
export type restaurantIdFoodIdType = {
    restaurantId: string,
    foodId: string
}