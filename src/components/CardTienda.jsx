import React from 'react'

export default function CardTienda({prod}) {
    return (
        <div className="card-tienda">
            <h3>{prod.name}</h3>
            <p>{prod.desc}</p>
            <div className="img">
                <img className='producto' src={prod.imgProd} alt="bucarest" />
                <img className='marca' src={prod.imgMarca} alt="bagues" />
            </div>
            <h2>${prod.precio}</h2>
        </div>
    )
}
