"use client";

import { FC, useState } from "react";
import { CustomerOrderType, ShoppingCartType } from "@utils/types";
import Rate from "@components/Rate/Rate";
import Image from "next/image";
import Button from "@components/Button/Button";
import Link from "next/link";
import { SHOPPING_CARTS } from "@utils/links";
import COMMENT from "@public/comment.svg";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import CommentBottomSheet from "@modules/Customer/ShoppingCarts/Orders/CommentBottomSheet/CommentBottomSheet";

type ShoppingCartCardProps = {
  shoppingCart: CustomerOrderType;
  isHistory?: boolean;
};

const ShoppingCartCard: FC<ShoppingCartCardProps> = ({
  shoppingCart,
  isHistory = false,
}) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleComment = (e: any) => {
    e.preventDefault();
    setIsBottomSheetOpen(true);
  };

  return (
    <>
      <Link href={SHOPPING_CARTS + "/" + shoppingCart.id}>
        <div
          className={
            "px-8 py-4 mt-7 mb-6 border-[1px] border-gray-card_border rounded-lg"
          }
        >
          <div className={"flex justify-between"}>
            <div className={"flex"}>
              <span className={"text-sm text-black font-medium ml-2"}>
                {shoppingCart.restaurantName}
              </span>
              <Rate rate={shoppingCart.restaurantRate} variant={"small"} />
            </div>
            {isHistory && (
              <div className={"flex"} onClick={handleComment}>
                <Image
                  src={COMMENT}
                  width={20}
                  height={20}
                  alt={"comment"}
                  className={"ml-2"}
                />
                <span
                  className={
                    "text-xs font-normal text-gray-primary underline underline-offset-4"
                  }
                >
                  ثبت امتیاز و نظر
                </span>
              </div>
            )}
          </div>

          <div className={"mt-5"}>
            {shoppingCart.foods.map((food) => (
              <div className={"flex mt-1"} key={food.id}>
                <Image
                  src={food.imageSrc}
                  width={30}
                  height={30}
                  alt={food.name}
                />
                <div
                  className={
                    "flex items-center mr-2 font-normal text-xs text-black"
                  }
                >
                  <span className={"ml-2"}>({food.count})</span>
                  <span>{food.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={"flex justify-between mt-5 gap-x-4"}>
            {isHistory ? (
              <Button
                label={"مشاهده‌ی فاکتور"}
                variant={"secondary"}
                className={"w-full"}
              />
            ) : (
              <>
                <Button label={"ادامه‌ی خرید"} className={"w-full"} />
                <Button
                  label={"حذف سبد"}
                  variant={"secondary"}
                  className={"w-full"}
                />
              </>
            )}
          </div>
        </div>
      </Link>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      >
        <CommentBottomSheet />
      </BottomSheet>
    </>
  );
};

export default ShoppingCartCard;
