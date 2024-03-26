import { createSlice } from "@reduxjs/toolkit";
import { ReservationItem2 } from "../../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    restaurantItems: ReservationItem2[]
}

const initialState: CartState = { restaurantItems: [] }

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<ReservationItem2>) => {
            //POST api
        },
        removeReservation: (state, action: PayloadAction<ReservationItem2>) => {
            //DELETE API
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer