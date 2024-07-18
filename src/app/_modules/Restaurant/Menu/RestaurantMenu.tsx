'use client'

import {FC, useState} from "react";
import Chips from "@components/Chips/Chips";

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

const RestaurantMenu: FC = () => {

    const [category, setCategory] = useState<string>('all')

    const handleCategory = (value: string) => () => {
        setCategory(value)
    }

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-lg font-medium my-6">محصولات</h1>
            <Chips chips={categories} active={category} onClick={handleCategory} className="mb-6"/>
        </div>
    )
}

export default RestaurantMenu;