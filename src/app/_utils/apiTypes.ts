export type RestaurantsResponseType = {
    id: string,
    address: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    restaurant_name: string,
    restaurant_comments: {
        avg: number,
        number_of_rate: number,
        number_of_review: number
    }
}