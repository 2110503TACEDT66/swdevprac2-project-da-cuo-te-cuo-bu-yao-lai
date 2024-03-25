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
            state.restaurantItems.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<ReservationItem>) => {
            const remainItems = state.restaurantItems.filter(obj => {
                return ((obj.createdAt !== action.payload.createdAt)
                    || (obj.user !== action.payload.user)
                    || (obj.revDate !== action.payload.revDate))
            })
            state.restaurantItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = cartSlice.actions
export default cartSlice.reducer