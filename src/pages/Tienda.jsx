import "../styles/tienda.css"
import CardTienda from '../components/CardTienda'

export default function Tienda() {
    const productos = [
        {
            name: "New York Sexy",
            desc: "Eau De Parfum x50Ml",
            imgProd: "/fondo3.webp",
            imgMarca: "/bagues.jpeg",
            precio: 5999
        },
        {
            name: "Conecto",
            desc: "Eau De Parfum x50Ml",
            imgProd: "/conecto.jpg",
            imgMarca: "/biogreen.png",
            precio: 10999
        },
        {
            name: "Blush",
            desc: "Eau De Toilette x50Ml",
            imgProd: "/fondo2.webp",
            imgMarca: "/bagues.jpeg",
            precio: 8999
        },
        {
            name: "Bonjur",
            desc: "Eau De Parfum x50Ml",
            imgProd: "/fondo4.jpg",
            imgMarca: "/GIGOT_Logo_Web.png",
            precio: 9999
        },
        {
            name: "Kriska Shock",
            desc: "Eau De Toilette x50Ml",
            imgProd: "/fondo5.jpg",
            imgMarca: "/natura.jpg",
            precio: 9999
        },
        {
            name: "Gudichi",
            desc: "Oleo corporal x10Ml",
            imgProd: "/fondo1.webp",
            imgMarca: "/bagues.jpeg",
            precio: 7999
        },
        {
            name: "Crema de Malva",
            desc: "Confort extra x55g",
            imgProd: "/cremaMalva.jpg",
            imgMarca: "/just.jpg",
            precio: 9999
        },
        {
            name: "Bucarest",
            desc: "Eau De Parfum x50Ml",
            imgProd: "/bucarest.webp",
            imgMarca: "/bagues.jpeg",
            precio: 5999
        },
        {
            name: "Piedras Aromaticas",
            desc: "Piedras aromaticas",
            imgProd: "/piedritas_capullos.jpg",
            imgMarca: "/biogreen.png",
            precio: 5999
        },
        {
            name: "Action a 24K",
            desc: "Serum Reafirmante x30Ml",
            imgProd: "/action.jpg",
            imgMarca: "/GIGOT_Logo_Web.png",
            precio: 5600
        },
        {
            name: "Pitanga",
            desc: "Jabon liquido x250Ml",
            imgProd: "/pitanga.jpg",
            imgMarca: "/natura.jpg",
            precio: 5600
        },
        {
            name: "Essential",
            desc: "Revitalizador Guduchi x15Ml",
            imgProd: "/essential.jpg",
            imgMarca: "/just.jpg",
            precio: 12600
        },
    ]
    return (
        <main>
            <div className="container container-tienda">
                {productos.map((prod, index) => <CardTienda key={index} prod={prod} />)}
            </div>
        </main>
    )
}
