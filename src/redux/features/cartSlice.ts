import { createSlice } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    restaurantItems: ReservationItem[]
}

const initialState: CartState = { restaurantItems: [] }

export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<ReservationItem>) => {
          //POST api
        },
        removeReservation: (state, action: PayloadAction<ReservationItem>) => {
            //DELETE API
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer