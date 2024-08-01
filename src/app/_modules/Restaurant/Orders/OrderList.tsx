"use client";

import { FC, useEffect, useState } from "react";
import { Order, OrderType } from "@utils/types";
import OrderCard from "@modules/Restaurant/Orders/OrderCard";
import { useSearchParams } from "next/navigation";
import {
  getRestaurantActiveOrdersReq,
  getRestaurantOrderHistoryReq,
} from "@api/services/restaurantService";

const OrderList: FC = () => {
  const searchParams = useSearchParams();
  const orderType: OrderType = searchParams.get("type") as OrderType;
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      let response;
      if (orderType === "active") {
        response = await getRestaurantActiveOrdersReq();
      } else {
        response = await getRestaurantOrderHistoryReq();
      }

      if (response.isSuccess) {
        setOrders(response.data);
      }
      setLoading(false);
    };

    fetchOrders();
  }, [orderType]);

  if (loading) {
    return (
      <div className="my-8 text-base animate-pulse">
        در حال دریافت اطلاعات...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-4 w-full mt-6">
      {orders.map((order, index) => (
        <OrderCard order={order as Order} key={index} />
      ))}
    </div>
  );
};

export default OrderList;
