import { create } from 'zustand'
import { FoodPlusCountType, RestaurantType, ShoppingCartType } from '@utils/types'

type State = {
    shoppingCart: ShoppingCartType | undefined | null
    foods: FoodPlusCountType[] | undefined
    allRestaurants: RestaurantType[] | undefined
}

type Action = {
    setShoppingCart: (shoppingCart: ShoppingCartType | null) => void
    setFoods: (foods: FoodPlusCountType[]) => void
    setAllRestaurants: (allRestaurants: RestaurantType[]) => void
}

export const useShoppingCart = create<State & Action>((set) => ({
    shoppingCart: undefined,
    foods: undefined,
    allRestaurants: undefined,
    setShoppingCart: (shoppingCart) => set({ shoppingCart }),
    setFoods: (foods) => set({ foods }),
    setAllRestaurants: (allRestaurants) => set({ allRestaurants })
}))