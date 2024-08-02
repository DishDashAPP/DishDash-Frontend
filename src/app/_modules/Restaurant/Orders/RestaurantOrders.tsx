"use client";

import { FC, Suspense } from "react";
import TabSwitch from "@modules/Restaurant/Orders/TabSwitch";
import OrderList from "@modules/Restaurant/Orders/OrderList";

const RestaurantOrders: FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Suspense fallback={<></>}>
        <TabSwitch />
        <OrderList />
      </Suspense>
    </div>
  );
};

export default RestaurantOrders;
