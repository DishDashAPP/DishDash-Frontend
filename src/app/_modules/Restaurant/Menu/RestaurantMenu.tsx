'use client'

import {FC, useState} from "react";
import Chips from "@components/Chips/Chips";
import MenuItems from "@modules/Restaurant/Menu/MenuItems";

const categories = [
    {
        title: 'همه',
        value: 'all'
    },
    {
        title: 'پیش‌غذا',
        value: 'appetizer'
    },
    {
        title: 'پیتزا',
        value: 'pizza'
    },
    {
        title: 'پاستا',
        value: 'pasta'
    },
    {
        title: 'نوشیدنی',
        value: 'drink'
    },
    {
        title: 'دسر',
        value: 'dessert'
    },
    {
        title: 'غذای اصلی',
        value: 'main'
    }
]

// generate mock data type menuItem = {
//     id: number,
//     title: string,
//     description: string,
//     price: number,
//     isAvailable: boolean,
//     category: string
// }
const menuItems = [
    {
        id: 1,
        title: 'پاستا پستو',
        description: 'سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان',
        price: 280000,
        isAvailable: true,
        category: 'pasta'
    },
    {
        id: 2,
        title: 'پیتزا مخصوص',
        description: 'سس گوجه، قارچ، زیتون، مرغ گریل، پنیر موزارلا',
        price: 320000,
        isAvailable: true,
        category: 'pizza'
    },
    {
        id: 3,
        title: 'پیتزا مخصوص',
        description: 'سس گوجه، قارچ، زیتون، مرغ گریل، پنیر موزارلا',
        price: 320000,
        isAvailable: true,
        category: 'pizza'
    }
]

const RestaurantMenu: FC = () => {

    const [category, setCategory] = useState<string>('all')

    const handleCategory = (value: string) => () => {
        setCategory(value)
    }

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-lg font-medium my-6">محصولات</h1>
            <Chips chips={categories} active={category} onClick={handleCategory} className="mb-6"/>
            <MenuItems menuItems={menuItems}/>
        </div>
    )
}

export default RestaurantMenu;