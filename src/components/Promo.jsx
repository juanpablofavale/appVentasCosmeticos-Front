import React from 'react'

export default function Promo({img, promo}) {
    return (
        <div className={"promo " + promo}>
            <img src={img} alt={promo} />
        </div>
    )
}
