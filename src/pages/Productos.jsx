import { useEffect, useRef, useState } from 'react'
import { api } from "../utils/axios.js"

export default function Productos() {
    const [datos, setDatos] = useState([]);
    const formulario = useRef();

    useEffect(()=>{
        api.get('/api/productos').then(data => setDatos(data.data.response))
        //axios("http://localhost:3000/api/productos").then(data => setDatos(data.data.response))
    },[])

    const formSubmit = (e) => {
        e.preventDefault
        alert("HOLA")
    }

    const handleClick = (prod) => {
        alert(prod._id)
        console.log(formulario.current)
    }

    return (
    <main>
        <div>Productos</div>
        <form action="" onSubmit={formSubmit} ref={formulario}>
            <h5>ID: Nuevo</h5>
            <div className="input">
                <div>
                    <label htmlFor="mar">Marca</label>
                    <input type="text" id='mar' name='marca'/>
                </div>
                <div>
                    <label htmlFor="nom">Nombre</label>
                    <input type="text" id='nom' name='nombre'/>
                </div>
                <div>
                    <label htmlFor="cod">Codigo</label>
                    <input type="text" id='cod' name='codigo'/>
                </div>

                <div>
                    <label htmlFor="tipo">Tipo</label>
                    <input type="text" id='tipo' name='nombreTipo'/>
                </div>
                <div>
                    <label htmlFor="sma">Sub Marca</label>
                    <input type="text" id='sma' name='subMarca'/>
                </div>
                <div>
                    <label htmlFor="mat">Material</label>
                    <input type="text" id='mat' name='material'/>
                </div>
                <div>
                    <label htmlFor="col">Color</label>
                    <input type="text" id='col' name='color'/>
                </div>
                <div>
                    <label htmlFor="fra">Fragancia</label>
                    <input type="text" id='fra' name='fragancia'/>
                </div>
                <div>
                    <label htmlFor="nomo">Nombre Original</label>
                    <input type="text" id='nomo' name='nombreOriginal'/>
                </div>
                <div>
                    <label htmlFor="fao">Familia Olfativa</label>
                    <input type="text" id='fao' name='familiaOlfativa'/>
                </div>
                <div>
                    <label htmlFor="deo">Descripcion Olfativa</label>
                    <input type="text" id='deo' name='descripcionOlfativa'/>
                </div>
                <div>
                    <label htmlFor="gen">Genero</label>
                    <input type="text" id='gen' name='genero'/>
                </div>

                <div>
                    <label htmlFor="subt">Subtipo</label>
                    <input type="text" id='subt' name='subtipo'/>
                </div>
                <div>
                    <label htmlFor="img">Imagen</label>
                    <input type="text" id='img' name='imagen'/>
                </div>
                <div>
                    <label htmlFor="pres">Presentacion</label>
                    <input type="text" id='pres' name='presentacion'/>
                </div>
                <div>
                    <label htmlFor="desc">Descripcion</label>
                    <input type="text" id='desc' name='descripcion'/>
                </div>
                <div>
                    <label htmlFor="cos">Costo</label>
                    <input type="text" id='cos' name='costo'/>
                </div>
                <div>
                    <label htmlFor="pub">Porcentaje de Utilidad Bruta</label>
                    <input type="text" id='pub' name='porcUtilBrut'/>
                </div>
                <div>
                    <label htmlFor="pre">Precio</label>
                    <input type="text" id='pre' name='precio'/>
                </div>
                <div>
                    <label htmlFor="stk">Stock</label>
                    <input type="text" id='stk' name='stock'/>
                </div>
                <div>
                    <label htmlFor="smin">Stock Minimo</label>
                    <input type="text" id='smin' name='stockMin'/>
                </div>
                <div>
                    <label htmlFor="smax">Stock Maximo</label>
                    <input type="text" id='smax' name='stockMax'/>
                </div>
            </div>
            <div className='botones'>
                <input type="submit" value="Guardar" />
                <input type="reset" value="Borrar Datos" />
                <input type="button" value="Cancelar" />
            </div>
        </form>
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
                            <tr key={prod._id} onClick={() => handleClick(prod)}>
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
