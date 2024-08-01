export type UserType = "CUSTOMER" | "RESTAURANT_OWNER" | "DELIVERY_PERSON";
export type OrderStatus = "PREPARING" | "DELIVERED" | "NOT_PAID" | "DELIVERING";
export type OrderType = "active" | "completed";
export type User = {
  id: number;
  address?: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  restaurant_name?: string;
};
export type Order = {
  id: number;
  customer: User;
  deliveryPerson: User;
  restaurantOwnerId: number;
  orderItems: OrderItem[];
  status: OrderStatus;
  createdAt: string;
  totalPrice: Price;
};
export type OrderItem = {
  price: Price;
  quantity: number;
  order_id: number;
  food_id: number;
  food_name: string;
};
export type Price = {
  amount: number;
  unit: string;
};
export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: string;
};
export type TChip = {
  title: string;
  value: string;
};
export type RestaurantType = {
  id: string;
  imageSrc: string;
  name: string;
  rate: string;
  courierPrice: string;
  WaitingTime: string;
};
export type FoodType = {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  price: string;
};
export type CommentType = {
  id: string;
  imageSrc: string;
  name: string;
  rate: number;
  comment: string;
};
export type CustomerOrderType = {
  id: string;
  restaurantId: string;
  restaurantName: string;
  restaurantRate: string;
  foods: (FoodType & {
    count: number;
  })[];
};
export type ShoppingCartType = CustomerOrderType & {
  total: string;
  deliveryPrice: string;
  finalPrice: string;
};

export type RestaurantIdType = {
  restaurantId: string;
};
export type RestaurantIdFoodIdType = {
  restaurantId: string;
  foodId: string;
};
export type RestaurantIdFoodType = {
  restaurantId: string;
  food: FoodType;
};
export type ShoppingCartIdType = {
  shoppingCartId: string;
};
