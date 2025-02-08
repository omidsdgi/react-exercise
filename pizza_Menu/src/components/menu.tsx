import Pizza from "@/components/pizza";

export default function Menu() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 flex justify-center items-center border-t-4 border-b-4 py-2 mb-10 w-max mx-auto">
                OUR MENU
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Pizza
                    name="Pizza Spinaci"
                    ingredient="Tomato, mozarella, spinach, and ricotta cheese"
                    photoName="/spinaci.jpg"
                    price={10}
                />
                <Pizza
                    name="Pizza Funghi"
                    ingredient="Tomato, mozarella, mushrooms, and onion"
                    photoName="/funghi.jpg"
                    price={12}
                />
                <Pizza
                    name="Pizza Salamino"
                    ingredient="Tomato, mozarella, and pepperoni"
                    photoName="/salamino.jpg"
                    price={18}
                />
                <Pizza
                    name="Pizza Prosciutto"
                    ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
                    photoName="/prosciutto.jpg"
                    price={11}
                />
                <Pizza
                    name="Pizza Margherita"
                    ingredient="Tomato and mozarella"
                    photoName="/margherita.jpg"
                    price={9}
                />
                <Pizza
                    name="Focaccia"
                    ingredient="Bread with italian olive oil and rosemary"
                    photoName="/focaccia.jpg"
                    price={16}
                />

            </div>
        </div>
    );
}
