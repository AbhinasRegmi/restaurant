import { BaseLayout } from "@/layouts/base";
import {Button} from "@/components/ui/button";
import { Link } from "@inertiajs/react";

function Category(props) {
    const data = PIZZAS;

    return (
        <section className="flex flex-wrap w-full">
            {data.map((item) => (
                <Link href={route('product', [`${item.id}`])} className="w-full md:w-1/2 lg:w-1/3 grow flex" key={item.id}>
                    <CategoryItem {...item} />
                </Link>
            ))}
        </section>
    );
}

function CategoryItem(props) {
    return (
        <div className="p-6 border-r border-b border-primary/70 grow flex flex-col group hover:bg-primary/5">
            <div className="w-full h-auto object-contain">
                <img src={props.img} alt={props.title} />
            </div>
           <div className="grow py-2"></div> 
            <div className="flex justify-between items-end">
                <h1 className="text-xl font-bold">{props.title}</h1>
                <h2 className="font-semibold">${props.price}</h2>
               <Button className="hidden lg:block invisible group-hover:visible">Add to cart</Button> 
            </div>
        </div>
    );
}

const PIZZAS = [
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
        img: "/temporary/p8.png",
        price: 32.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p3.png",
        price: 26.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: "Pesto Primavera",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p10.png",
        price: 28.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: "Veggie Supreme",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p11.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 6,
        title: "Four Cheese Fantasy",
        desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
        img: "/temporary/p12.png",
        price: 22.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
];

Category.layout = (page) => <BaseLayout children={page} />;
export default Category;
