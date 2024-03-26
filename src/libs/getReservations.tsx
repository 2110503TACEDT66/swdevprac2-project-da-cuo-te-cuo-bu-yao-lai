export default async function getReservations(token: string) {
    console.log(`${process.env.BACKEND_URL}`);
    const response = await fetch('https://presentation-day-1-da-cuo-te-cuo-bu-yao-lai.vercel.app/api/v1/reservations', {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Failed to fetch Reservations")
    }

    return await response.json()
}