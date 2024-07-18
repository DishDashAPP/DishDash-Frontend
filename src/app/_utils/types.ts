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