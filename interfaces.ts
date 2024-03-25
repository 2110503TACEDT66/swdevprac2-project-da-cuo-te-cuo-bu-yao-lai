export interface ReservationItem {
    carId: string
    carModel: string
    numOfDays: number
    pickupDate: string
    pickupLocation: string
    returnDate: string
    returnLocation: string
}

export interface CarItem {
    id: string
    model: string
    picture: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}

// export interface ReservationItem {
//     revDate: string
//     user: string
//     restaurant: string
//     createdAt: string
// }

export interface RestaurantItem {
    name: string
    address: string
    district: string
    province: string
    postalcode: string
    tel: string
    region: string
    openCloseTime: string
    picture: string
}

export interface RestaurantJson {
    count: number
    data: RestaurantItem[]
}

export interface MenuItem {
    name: string
    food: Array<object>
    restaurant: string
}

export interface MenuJson {
    count: number
    data: MenuItem[]
}