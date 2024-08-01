"use client";

import { useState } from "react";
import { OrderItem } from "@utils/types";
import { FC } from "react";
import Badge from "@components/Badge/Badge";
import Button from "@components/Button/Button";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import OrderDetails from "@modules/Restaurant/Orders/OrderDetails";

type OrderCardProps = {
  order: OrderItem;
};

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const badgeText = {
    preparing: "جدید",
    delivering: "در حال ارسال",
    delivered: "تحویل داده شده",
  }[order.status];

  const isActiveOrder = order.status === "preparing";

  return (
    <div className="flex flex-col rounded-lg border border-gray-border p-4 w-full">
      <div className="flex items-center justify-between">
        <span>{order.user.name}</span>
        <Badge text={badgeText} color={isActiveOrder ? "green" : "red"} />
      </div>
      <div className="flex items-center justify-between my-4">
        <div>
          <span>{order.price}</span>
          <span> تومان</span>
        </div>
        <span>{order.createdAt}</span>
      </div>
      <Button
        variant="secondary"
        className="py-3 text-base"
        onClick={() => setBottomSheetOpen(true)}
      >
        {isActiveOrder ? "جزئیات سفارش" : "مشاهده‌ی فاکتور"}
      </Button>

      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <h2 className="text-base font-semibold mt-4 mb-6">
          {isActiveOrder ? "جزئیات سفارش" : "فاکتور"}
        </h2>
        <OrderDetails orderId={order.id} />
      </BottomSheet>
    </div>
  );
};

export default OrderCard;
