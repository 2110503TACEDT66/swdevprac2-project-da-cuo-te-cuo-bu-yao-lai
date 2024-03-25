import { resolve } from "path"

export default async function getRestaurants() {

    // await new Promise((resolve) => setTimeout(resolve, 5000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/restaurants`, { next: { tags: ['restaurants'] } })
    if (!response.ok) {
        throw new Error("Failed to fetch restaurants")
    }

    return await response.json()
}