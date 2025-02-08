export default function Footer() {
    const hour=new Date().getHours();
    const openHour=12;
    const closeHour=22;
    const isOpen= hour>=openHour && hour<=closeHour;

    return (<footer >{new Date().toLocaleTimeString()}. we're currently open </footer>)
}