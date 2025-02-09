// import Order from "./order";
// export default function Footer() {
//     const hour=new Date().getHours();
//     const openHour=11;
//     const closeHour=22;
//     const isOpen= hour>=openHour && hour<=closeHour;
//
//     return (<footer >
//         {isOpen ?(
//             <Order openHours={openHour} closeHours={closeHour}/>
//         ): <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>}
//     </footer>)
// }
import Order from "./Order";

export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="text-center text-gray-800 py-6">
            {isOpen ? (
                <Order openHours={openHour} closeHours={closeHour} />
            ) : (
                <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
            )}
        </footer>
    );
}
