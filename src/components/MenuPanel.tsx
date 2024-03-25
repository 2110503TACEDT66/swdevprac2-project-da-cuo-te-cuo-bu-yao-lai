import Productcard from "./ProductCard"
import Link from "next/link"
import { MenuItem, MenuJson } from "interfaces"

export default async function MenuPanel({ menuJson }: { menuJson: MenuJson }) {
    const menuJsonReady = await menuJson
    return (
        <>
            Recommend Dish
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>
                {
                    menuJsonReady.food.map((foodItem:MenuItem ) => (
                        <div className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                        p-2 sm:p-4 md:p-4 lg:pd-8">
                            <Productcard restaurantName={foodItem.name} imgSrc={foodItem.img} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}