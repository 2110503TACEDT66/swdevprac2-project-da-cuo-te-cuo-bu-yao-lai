export default async function getMenu(id: string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/restaurants/${id}/menus`)
    if (!response.ok) {
        throw new Error("Failed to fetch Menu")
    }

    return await response.json()
}