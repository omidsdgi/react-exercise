import Pizza from "@/components/pizza";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with Italian olive oil and rosemary",
        price: 6,
        photoName: "/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozzarella",
        price: 10,
        photoName: "/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozzarella, mushrooms, and onion",
        price: 12,
        photoName: "/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozzarella, and pepperoni",
        price: 15,
        photoName: "/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
        price: 18,
        photoName: "/prosciutto.jpg",
        soldOut: false,
    },
];

export default function Menu() {
    const pizzas=pizzaData
    const numPizzas=pizzas.length;
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 flex justify-center items-center border-t-4 border-b-4 py-2 mb-10 w-max mx-auto">
                OUR MENU
            </h2>

            {numPizzas>0 ?(
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {pizzas.map((pizza) => (
                    <Pizza pizzaObj={pizza} />

                ))}
            </ul>) : <p>We'er still working on our menu. Please come back later :)</p>
            }
        </div>
    );
}
