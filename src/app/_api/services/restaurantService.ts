import { RESTAURANT_OWNER, RESTAURANT_OWNER_ORDER } from "@api/urls";
import { sendRequest } from "@api/axiosInstance";
import { Order, User } from "@utils/types";

type TRestaurantOwnerProfile = {
  first_name: string;
  last_name: string;
  phone_number: string;
  restaurant_name: string;
  address: string;
};

export async function getRestaurantActiveOrdersReq() {
  return sendRequest<Order[]>(RESTAURANT_OWNER_ORDER.GET_ACTIVE_ORDERS, "GET");
}

export async function getRestaurantOrderHistoryReq() {
  return sendRequest<Order[]>(RESTAURANT_OWNER_ORDER.GET_ORDERS, "GET");
}

export async function updateRestaurantOrderStatusReq(
  orderId: string,
  status: string,
) {
  return sendRequest(
    RESTAURANT_OWNER_ORDER.UPDATE_ORDER_STATUS(orderId, status),
    "POST",
  );
}

export async function getRestaurantProfileReq() {
  return sendRequest<User>(RESTAURANT_OWNER.GET, "GET");
}

export async function updateRestaurantProfileReq(
  data: TRestaurantOwnerProfile,
) {
  return sendRequest(RESTAURANT_OWNER.MODIFY, "PUT", data);
}
