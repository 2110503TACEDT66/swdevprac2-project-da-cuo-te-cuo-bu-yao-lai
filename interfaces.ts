export interface ReservationItem {
    _id: string
    revDate: string
    user: string
    restaurant: string
    createdAt: string
}

export interface RestaurantItem {
    _id: string
    name: string
    address: string
    district: string
    province: string
    postalcode: string
    tel: string
    region: string
    openCloseTime: string
    picture: string
    reservation : Array<object>
    id:string
}



export interface MenuItem {
    name: string
    img: string
}



export interface RestaurantJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: RestaurantItem[]
}


export interface MenuJson {
    name: string
    food: MenuItem[]
    restaurant: string
}
