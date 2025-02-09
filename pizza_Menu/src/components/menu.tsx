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
//
// export default function Menu() {
//     const pizzas=pizzaData
//     const numPizzas=pizzas.length;
//     return (
//         <div className="bg-gray-100 min-h-screen py-10 px-6">
//             <h2 className="text-4xl font-bold text-center text-gray-800 flex justify-center items-center border-t-4 border-b-4 py-2 mb-10 w-max mx-auto">
//                 OUR MENU
//             </h2>
//             {numPizzas>0 ?(
//                 <>
//                     <p> Authentic Itaian cuisine. 6 creative dish to choose fron. All from our stone oven, all organic, all delicious.</p>
//             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {pizzas.map((pizza) => (
//                     <Pizza pizzaObj={pizza} />
//
//                 ))}
//
//             </ul>
//                 </>
//                     ) : (<p>We'er still working on our menu. Please come back later :)</p>
//
//             )}
//         </div>
//     );
// }


export default function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
        <div className="bg-background min-h-screen mx-auto py-10 px-6">
            <h2 className="text-4xl font-medium text-center text-text border-t-2 border-b-2 py-2 w-max mx-auto uppercase tracking-wide">
                Our Menu
            </h2>

            {numPizzas > 0 ? (
                <>
                    <p className="text-center text-lg leading-relaxed mt-6 w-4/5 mx-auto">
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-10">
                        {pizzas.map((pizza) => (
                            <Pizza key={pizza.id} pizzaObj={pizza} />
                        ))}
                    </ul>
                </>
            ) : (
                <p className="text-center text-lg mt-6">We're still working on our menu. Please come back later :)</p>
            )}
        </div>
    );
}
