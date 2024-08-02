import { sendRequest } from '@api/axiosInstance'
import { OrderStatus, User } from '@utils/types'
import { DELIVERY_PERSON, DELIVERY_PERSON_ORDER } from '@api/urls'

type TDeliveryPersonProfile = {
    first_name: string
    last_name: string
    phone_number: string
}

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
