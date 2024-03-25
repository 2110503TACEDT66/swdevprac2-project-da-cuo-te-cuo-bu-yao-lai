import Image from "next/image"
import getRestaurant from "@/libs/getRestaurant"
import { Link } from "@mui/material"
import MenuPanel from "@/components/MenuPanel"
import getMenu from "@/libs/getMenu"
import { MenuJson } from "interfaces"
export default async function RestaurantDetailPage({ params }: { params: { cid: string } }) {

    const restaurantDetail = await getRestaurant(params.cid)
    const menus: MenuJson = await getMenu(params.cid)
    //api get menu
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">Car ID {restaurantDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={restaurantDetail.data.picture}
                    alt='Restaurant Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]" />
                <div className="text-md mx-5 text-left">
                    {restaurantDetail.data.description}
                    <div className="text-md mx-5">์Name: {restaurantDetail.data.name} </div>
                    <div className="text-md mx-5">Address: {restaurantDetail.data.address} </div>
                    <div className="text-md mx-5">District: {restaurantDetail.data.district} </div>
                    <div className="text-md mx-5">Province: {restaurantDetail.data.province} </div>
                    <div className="text-md mx-5">Postalcode: {restaurantDetail.data.postalcode} </div>
                    <div className="text-md mx-5">tel: {restaurantDetail.data.tel} </div>
                    <div className="text-md mx-5">region: {restaurantDetail.data.region} </div>
                    <div className="text-md mx-5">openCloseTime: {restaurantDetail.data.openCloseTime} </div>

                    <Link href={`/reservations?id=${params.cid}&restaurant=${restaurantDetail.data.name}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
        	text-white shadow-sm">
                            Make Reservaion
                        </button>
                    </Link>

                </div>
                <MenuPanel RestaurantJson={menus} />
            </div>
        </main >
    )
}

export async function generateStaticParams() {
    return [{ cid: '001' }, { cid: '002' }, { cid: '003' }, { cid: '004' }]
}
