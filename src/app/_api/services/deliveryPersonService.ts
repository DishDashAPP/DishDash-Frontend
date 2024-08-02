import { sendRequest } from '@api/axiosInstance'
import { User } from '@utils/types'
import { DELIVERY_PERSON } from '@api/urls'

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
