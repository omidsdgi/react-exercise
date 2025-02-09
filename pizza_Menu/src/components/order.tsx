// export default function Order({closeHours, openHours}: {closeHours?: number}) {
//     return(
//     <div>
//         <p>
//             We're open form {openHours}:00 to {closeHours}:00. come visit us or order online
//         </p>
//         <button>Order</button>
//     </div>
//     )
// }

export default function Order({ openHours, closeHours }) {
    return (
        <div className="flex flex-col items-center gap-4 bg-primary text-black p-6 rounded-lg shadow-lg">
            <p className="text-lg font-medium">
                We're open from {openHours}:00 to {closeHours}:00. Come visit us or order online.
            </p>
            <button className="bg-yellow-500 text-primary font-semibold px-6 py-3 rounded-lg transition hover:bg-yellow-400">
                Order Now
            </button>
        </div>
    );
}
