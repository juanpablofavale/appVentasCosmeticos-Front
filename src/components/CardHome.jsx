import React from 'react'

export default function CardHome({marca, index}) {
    return (
        <>
            { index % 2 == 0 ?
                <div className="card">
                    <img src={marca.img} alt={"logo " + marca.name} />
                    <div className="card-body">
                        <h3>{marca.name}</h3>
                        <p>{marca.desc}</p>
                    </div>
                </div>
            :
                <div className="card">
                    <div className="card-body">
                        <h3>{marca.name}</h3>
                        <p>{marca.desc}</p>
                    </div>
                    <img src={marca.img} alt={"logo " + marca.name} />
                </div>
            }
        </>
    )
}