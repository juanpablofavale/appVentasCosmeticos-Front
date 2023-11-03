import CardHome from '../components/CardHome'
import Promo from '../components/Promo'

export default function Home() {
    const marcas = [
        {
            name: "Bagues",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            img:"/bagues.jpeg"
        },
        {
            name: "Gigot",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            img:"/gigot.jpg"
        },
        {
            name: "Natura",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            img:"/natura.jpg"
        },
        {
            name: "Just",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            img:"/just.jpg"
        },
        {
            name: "Biogreen",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            img:"/biogreen.jpeg"
        },
    ]
    return (
        <main>
            <Promo img="/fondo3.webp" promo="promo1"/>
            <div className="container">
                {marcas.map((marca, index) => <CardHome key={marca.name} marca={marca} index={index}/>)}
            </div>
            <Promo img="/fondo4.jpg" promo="promo2"/>
        </main>
    )
}
