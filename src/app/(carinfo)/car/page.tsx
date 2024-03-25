import getRestaurants from "@/libs/getRestaurants"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import { RestaurantItem, RestaurantJson } from "interfaces"


export default async function Car() {
    const restaurants: RestaurantJson = getRestaurants()
    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Restaurant</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress /></p>}>
                <CarCatalog RestaurantJson={restaurants} />
            </Suspense>

            {/* <hr className="my-10"></hr>
            <h1 className="text-xl font-medium">Try Client-side Car Panel</h1>
            <CarPanel /> */}
        </main>
    )
}