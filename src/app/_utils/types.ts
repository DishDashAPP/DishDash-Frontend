export type UserType = 'CUSTOMER' | 'RESTAURANT_OWNER' | 'DELIVERY_PERSON'
export type OrderStatus = 'PREPARING' | 'DELIVERED' | 'NOT_PAID' | 'DELIVERING'
export type OrderType = 'active' | 'completed'

export type User = {
    id: number
    address?: string
    first_name: string
    last_name: string
    phone_number: string
    restaurant_name?: string
}
export type Order = {
    id: number
    status: OrderStatus
    customer_id: number
    restaurant_owner_id: number
    order_items: OrderItem[]
    create_price: Price
    create_time: string
    delivery_person: User | null
    customer_dto: User
}
export type OrderItem = {
    price: Price
    quantity: number
    order_id: number
    food_id: number
    food_name: string
}
export type Price = {
    amount: number
    unit: string
}
export type MenuItem = {
    id: number
    name: string
    description: string
    stock: number
    price: Price
    category_id: number
}
export type TChip = {
    id: number
    name: string
}
export type RestaurantType = {
    id: string
    username: string
    imageSrc: string
    name: string
    rate: string
    courierPrice: string
    WaitingTime: string
}
export type MenuType = {
    categories: TChip[]
    foods: FoodType[]
}
export type FoodType = {
    imageSrc: string
    name: string
    description: string
    price: string
    category_id: number
}
export type CommentType = {
    id: string
    imageSrc: string
    name: string
    rate: number
    comment: string
}
export type CustomerOrderType = {
    id: string
    restaurantId: string
    restaurantName: string
    restaurantRate: string
    foods: (FoodType & {
        count: number
    })[]
}
export type ShoppingCartType = CustomerOrderType & {
    total: string
    deliveryPrice: string
    finalPrice: string
}

export type RestaurantIdType = {
    restaurantId: string
}
export type RestaurantIdFoodIdType = {
    restaurantId: string
    foodId: string
}
export type RestaurantIdFoodType = {
    restaurantId: string
    food: FoodType
}
export type ShoppingCartIdType = {
    shoppingCartId: string
}
