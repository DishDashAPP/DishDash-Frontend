"use client";

import { FC, useState } from "react";
import Chips from "@components/Chips/Chips";
import MenuItems from "@modules/Restaurant/Menu/MenuItems";
import ADD from "@public/add.svg";
import Image from "next/image";
import NewFoodItem from "@modules/Restaurant/Menu/NewFoodItem";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import { TChip } from "@utils/types";

const categories: TChip[] = [
  {
    title: "همه",
    value: "all",
  },
  {
    title: "پیش‌غذا",
    value: "appetizer",
  },
  {
    title: "پیتزا",
    value: "pizza",
  },
  {
    title: "پاستا",
    value: "pasta",
  },
  {
    title: "نوشیدنی",
    value: "drink",
  },
  {
    title: "دسر",
    value: "dessert",
  },
  {
    title: "غذای اصلی",
    value: "main",
  },
];

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
    title: "پاستا پستو",
    description: "سس پستو، مرغ گریل، پنیر موزارلا،‌ پنیر پارمسان",
    price: 280000,
    isAvailable: true,
    category: "pasta",
  },
  {
    id: 2,
    title: "پیتزا مخصوص",
    description: "سس گوجه، قارچ، زیتون، مرغ گریل، پنیر موزارلا",
    price: 320000,
    isAvailable: true,
    category: "pizza",
  },
  {
    id: 3,
    title: "پیتزا مخصوص",
    description: "سس گوجه، قارچ، زیتون، مرغ گریل، پنیر موزارلا",
    price: 320000,
    isAvailable: true,
    category: "pizza",
  },
];

const RestaurantMenu: FC = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-lg font-medium my-6">محصولات</h1>
      <Chips chips={categories} className="mb-6" />
      <MenuItems menuItems={menuItems} />
      <button
        className="flex items-center justify-center bg-primary rounded-full w-[64px] h-[64px] fixed left-[32px] bottom-[95px] z-50"
        onClick={() => setBottomSheetOpen(true)}
      >
        <Image src={ADD} alt="add" />
      </button>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <NewFoodItem mode="add" />
      </BottomSheet>
    </div>
  );
};

export default RestaurantMenu;
