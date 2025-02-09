import Image  from "next/image";
import Header  from "./header";
export default function Pizza(props){
    console.log(props)
    if (props.pizzaObj.soldOut) return null;
    return (
        <li className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-xl shadow-md max-w-sm">

            {/* تصویر */}
            <div className="relative w-48 h-48">
                <Image src={props.pizzaObj.photoName} alt={props.pizzaObj.name} layout="fill" objectFit="cover" className="rounded-lg"/>
            </div>

            {/* متن */}
            <div>
            <h2 className="text-xl font-bold text-black">{props.pizzaObj.name}</h2>
            <p className="text-gray-700 text-center">{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.price}</span>
            </div>
        </li>
    )
}