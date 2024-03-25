export interface ReservationItem {
    revDate: string
    user: string
    restaurant: string
    createdAt: string
}

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



export interface MenuItem {
    name: string
    img: string
}



export interface RestaurantJson {
    count: number
    data: RestaurantItem[]
}


export interface MenuJson {
    name: string
    food: MenuItem[]
    restaurant: object
}
