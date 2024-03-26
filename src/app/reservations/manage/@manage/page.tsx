import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getReservations from "@/libs/getReservations"
import { ReservationItem } from "interfaces"

export default async function ManagePage() {

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const reservation = await getReservations(session.user.token)

    return (
        <>
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {
                    reservation.data.map((reservationItem: ReservationItem) => (
                        <p>{reservationItem._id},{reservationItem.revDate}</p>
                    ))
                }
            </div>
        </>
    )
}