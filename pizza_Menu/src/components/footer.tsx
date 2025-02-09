import Order from "./order";
export default function Footer() {
    const hour=new Date().getHours();
    const openHour=13;
    const closeHour=22;
    const isOpen= hour>=openHour && hour<=closeHour;

    return (<footer >
        {isOpen ?(
            <Order openHours={openHour} closeHours={closeHour}/>
        ): <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>}
    </footer>)
}