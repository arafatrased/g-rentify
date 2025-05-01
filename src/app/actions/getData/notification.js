

export const getNotificationData = async (email) =>{
    const response = await fetch(`api/notification?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;

}