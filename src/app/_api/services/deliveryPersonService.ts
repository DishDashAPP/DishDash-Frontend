import { sendRequest } from '@api/axiosInstance'
import { OrderStatus, User } from '@utils/types'
import { DELIVERY_PERSON, DELIVERY_PERSON_ORDER } from '@api/urls'
import { TDeliveryPersonProfile, TLocation } from '@utils/apiTypes'

export async function getDeliveryPersonProfileReq() {
    return sendRequest<User>(DELIVERY_PERSON.GET, 'GET')
}

export async function updateDeliveryPersonProfileReq(data: TDeliveryPersonProfile) {
    return sendRequest(DELIVERY_PERSON.MODIFY, 'PUT', data)
}

export async function getDeliveryPersonCurrentOrderReq() {
    return sendRequest(DELIVERY_PERSON_ORDER.GET_CURRENT_ORDER, 'GET')
}

export async function updateDeliveryPersonCurrentOrderReq(orderId: string, status: OrderStatus) {
    return sendRequest(DELIVERY_PERSON_ORDER.UPDATE_ORDER_STATUS(orderId, status), 'PUT')
}

export async function setDeliveryPersonLocationReq(location: TLocation) {
    return sendRequest(DELIVERY_PERSON.SET_LOCATION, 'POST', location)
}

export async function getDeliveryPersonLocationReq() {
    return sendRequest<TLocation>(DELIVERY_PERSON.GET_LOCATION, 'GET')
}
