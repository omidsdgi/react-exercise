// import Image  from "next/image";
// import Header  from "./header";
// export default function Pizza({pizzaObj}){
//     return (
//         <li className={`flex flex-col items-center gap-4 p-6 rounded-xl shadow-md max-w-sm
//     ${pizzaObj.soldOut ? "bg-gray-300" : ""}`}>
//
//             {/* تصویر */}
//             <div className="relative w-48 h-48">
//                 <Image src={pizzaObj.photoName} alt={pizzaObj.name} layout="fill" objectFit="cover"
//                        className="rounded-lg"/>
//             </div>
//
//             {/* متن */}
//             <div>
//                 <h2 className="text-xl font-bold text-black">{pizzaObj.name}</h2>
//                 <p className="text-gray-700 text-center">{pizzaObj.ingredients}</p>
//                 <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
//             </div>
//         </li>
//     )
// }
import Image from "next/image";

export default function Pizza({ pizzaObj }) {
    return (
        <li className={`flex flex-row items-center gap-6 p-6 rounded-xl shadow-md max-w-sm transition-all 
        ${pizzaObj.soldOut ? "bg-gray-300 text-gray-600" : "bg-white"}`}>

            <div className="relative w-32 h-32 flex-shrink-0">
                <Image src={pizzaObj.photoName} alt={pizzaObj.name} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>

            <div className="text-left">
                <h2 className="text-2xl font-semibold">{pizzaObj.name}</h2>
                <p className="text-gray-700 text-sm">{pizzaObj.ingredients}</p>
                <span className="text-lg font-medium">{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
            </div>
        </li>
    );
}
