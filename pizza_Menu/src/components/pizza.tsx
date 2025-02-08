import Image  from "next/image";
import Header  from "./header";
export default function Pizza(props){
    console.log(props)
    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-xl shadow-md max-w-sm">

            {/* تصویر */}
            <div className="relative w-48 h-48">
                <Image src={props.photoName} alt={props.name} layout="fill" objectFit="cover" className="rounded-lg"/>
            </div>

            {/* متن */}
            <div>
            <h2 className="text-xl font-bold text-black">{props.name}</h2>
            <p className="text-gray-700 text-center">{props.ingredient}</p>
            <span>{props.price}</span>
            </div>
        </div>
    )
}