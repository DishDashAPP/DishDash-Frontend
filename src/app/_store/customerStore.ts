import { create } from 'zustand'
import { FoodPlusCountType, ShoppingCartType } from '@utils/types'

type State = {
    shoppingCart: ShoppingCartType | undefined | null
    foods: FoodPlusCountType[] | undefined
}

type Action = {
    setShoppingCart: (shoppingCart: ShoppingCartType | null) => void
    setFoods: (foods: FoodPlusCountType[]) => void
}

export const useShoppingCart = create<State & Action>((set) => ({
    shoppingCart: undefined,
    foods: undefined,
    setShoppingCart: (shoppingCart) => set({ shoppingCart }),
    setFoods: (foods) => set({ foods })
}))