"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"
import { ReservationItem } from "interfaces"


export default function ReservationCart() {

    const reservationItems = useAppSelector((state) => state.cartSlice.restaurantItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            {
                reservationItems.map((reservationItem:ReservationItem) => (
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.user}>
                        <div className="text-xl">{reservationItem.restaurant}</div>
                        <div className="text-sm">Pick-up {reservationItem.revDate} </div>
                        

                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm" onClick={() => dispatch(removeReservation(reservationItem))}>
                            Remove from Cart
                        </button>
                    </div>
                ))
            }
        </>
    )
}