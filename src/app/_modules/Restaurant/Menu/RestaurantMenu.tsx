"use client";

import { FC, useEffect, useState } from "react";
import Chips from "@components/Chips/Chips";
import MenuItems from "@modules/Restaurant/Menu/MenuItems";
import ADD from "@public/add.svg";
import Image from "next/image";
import NewFoodItem from "@modules/Restaurant/Menu/NewFoodItem";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import { MenuItem, TChip } from "@utils/types";
import {
  getAllCategoriesReq,
  getAllFoodsReq,
} from "@api/services/restaurantService";

const RestaurantMenu: FC = () => {
  const [loading, setLoading] = useState(true);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [categories, setCategories] = useState<TChip[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<TChip | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const categoriesRes = await getAllCategoriesReq();
      const foodsRes = await getAllFoodsReq();
      if (categoriesRes.isSuccess) {
        setCategories([{ id: 0, name: "همه" }, ...categoriesRes.data]);
      }
      if (foodsRes.isSuccess) {
        setMenuItems(foodsRes.data);
        setFilteredItems(foodsRes.data); // Initially show all items
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category: TChip) => {
    setSelectedCategory(category);
    if (category.id === 0) {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) => item.category_id === category.id),
      );
    }
  };

  const handleDelete = async (id: number) => {
    const updatedFoodsRes = await getAllFoodsReq();
    if (updatedFoodsRes.isSuccess) {
      setMenuItems(updatedFoodsRes.data);
      setFilteredItems(
        selectedCategory?.id === 0
          ? updatedFoodsRes.data
          : updatedFoodsRes.data.filter(
              (item) => item.category_id === selectedCategory?.id,
            ),
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-lg font-medium my-6">محصولات</h1>
      {loading ? (
        <div className="my-8 text-base animate-pulse">
          در حال دریافت اطلاعات...
        </div>
      ) : (
        <>
          <Chips
            chips={categories}
            onCategoryChange={handleCategoryChange}
            className="mb-6"
          />
          <MenuItems menuItems={filteredItems} onDelete={handleDelete} />
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
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
