import React from 'react'

const OrderStatusBadge = ({badgeText}) => {

    let badgeBgColor
    if(badgeText.toLowerCase() === 'pending'){
        badgeBgColor = '#C537DD'
    }else if(badgeText.toLowerCase() === 'shipped'){
        badgeBgColor = '#3980D8'
    }else if(badgeText.toLowerCase() === 'received'){
        badgeBgColor = '#2CAA62'
    }else if(badgeText.toLowerCase() === 'cancled'){
        badgeBgColor = '#EB0000'
    }else{
        badgeBgColor = '#000'
    }

    return <div style={{
        backgroundColor: badgeBgColor && badgeBgColor
    }} className="badge text-white">{badgeText && badgeText}</div>
}

export default OrderStatusBadge
