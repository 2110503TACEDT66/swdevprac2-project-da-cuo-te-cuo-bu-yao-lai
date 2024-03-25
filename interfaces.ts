

export interface CarItem {
    id: string
    model: string
    picture: string
}
export interface MenuItem {
    
    name: string
    img: string
}


export interface CarJson {
    count: number
    data: CarItem[]
}

export interface ResJson {
    name: string
    food: MenuItem[]
    restaurant:object
}

export interface ReservationItem {
    revDate: string
    user: string
    restaurant: string
    createdAt: string

    
}
