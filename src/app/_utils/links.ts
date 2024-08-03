export const SIGNUP = '/signup'
export const LOGIN = '/login'
export const RESTAURANT = '/restaurant'
export const CUSTOMER = '/customer'
export const COURIER = '/courier'
export const RESTAURANT_ORDERS = (type: string) => `/restaurant/orders?type=${type}`
export const RESTAURANT_MENU = '/restaurant/menu'
export const COURIER_CURRENT_ORDER = '/courier/orders'
export const CUSTOMER_RESTAURANTS = '/customer/restaurants'
export const COMMENTS = '/comments'
export const SHOPPING_CARTS = '/customer/shopping-carts'
export const ORDER_TRACKING = (orderId: string) => `/customer/order-tracking/${orderId}`
