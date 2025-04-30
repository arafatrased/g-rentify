
export const getOrders = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_LINK}/all-orders`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            },      
            }
        )
    if (!res.ok) {
        throw new Error('Failed to fetch orders');
    }
    const data = await res.json();
    return {orders:data.orders, totalOrders:data.totalOrders};
    // return res.json();
}