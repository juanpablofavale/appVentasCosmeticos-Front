import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Productos() {
    const [datos, setDatos] = useState([]);
    
    useEffect(()=>{
        axios("http://localhost:3000/api/productos").then(data => setDatos(data.data.response))
    },[])

    return (
    <main>
        <div>Productos</div>
        <section>
            <table>
                <thead>
                    <tr>
                        <th>marca</th>
                        <th>nombre</th>
                        <th>codigo</th>
                        <th>nombreTipo</th>
                        <th>subMarca</th>
                        <th>material</th>
                        <th>color</th>
                        <th>fragancia</th>
                        <th>nombreOriginal</th>
                        <th>familiaOlfativa</th>
                        <th>descripcionOlfativa</th>
                        <th>genero</th>
                        <th>subtipo</th>
                        <th>imagen</th>
                        <th>presentacion</th>
                        <th>descripcion</th>
                        <th>costo</th>
                        <th>porcUtilBruta</th>
                        <th>precio</th>
                        <th>stock</th>
                        <th>stockMin</th>
                        <th>stockMax</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datos.map(prod => {
                            return (
                            <tr key={prod._id} onClick={() => alert("ID: " + prod._id)}>
                                <td>{prod.marca}</td>
                                <td>{prod.nombre}</td>
                                <td>{prod.codigo}</td>
                                <td>{prod.tipoProducto.nombreTipo}</td>
                                <td>{prod.tipoProducto.subMarca}</td>
                                <td>{prod.tipoProducto.material}</td>
                                <td>{prod.tipoProducto.color}</td>
                                <td>{prod.tipoProducto.fragancia}</td>
                                <td>{prod.tipoProducto.nombreOriginal}</td>
                                <td>{prod.tipoProducto.familiaOlfativa}</td>
                                <td>{prod.tipoProducto.descripcionOlfativa}</td>
                                <td>{prod.tipoProducto.genero}</td>
                                <td>{prod.subtipo}</td>
                                <td>{prod.imagen}</td>
                                <td>{prod.presentacion}</td>
                                <td>{prod.descripcion}</td>
                                <td>{prod.costo}</td>
                                <td>{prod.porcUtilBrut}</td>
                                <td>{prod.precio}</td>
                                <td>{prod.stock}</td>
                                <td>{prod.stockMin}</td>
                                <td>{prod.stockMax}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </section>
    </main>
    )
}
