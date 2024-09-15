import { Button } from "@/components/ui/button";
import { BaseLayout } from "@/layouts/base";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";

function Menu() {
    const data = [
        {
            id: 1,
            slug: "pastas",
            title: "Italian Pastas",
            desc: "Pasta is the Italian name for Italy's version of a basic foodstuff which is made in many countries by mixing a fine flour of ground grain with water to create a dough and then making into strips, ribbons and other shapes",
            img: "/temporary/m1.png",
            color: "white",
        },
        {
            id: 2,
            slug: "burgers",
            title: "Beast Burgers",
            desc: "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.",
            img: "/temporary/m2.png",
            color: "black",
        },
        {
            id: 3,
            slug: "pizza",
            title: "Cheesy pizzas",
            desc: "The world most popular fast food has ancient roots, but it was a royal seal of approval in 1889 that set pizza on the path to global domination",
            img: "/temporary/m3.png",
            color: "white",
        },
    ];

    return (
        <div className="px-7 flex flex-col lg:flex-row grow items-center justify-center py-2 lg:px-20">
            {data.map((item) => (
                <Link
                    href={`menu/${item.slug}`}
                    key={item.id}
                    className="w-full grow lg:min-h-[50vh] flex flex-col"
                >
                    <MenuItem {...item} />
                </Link>
            ))}
        </div>
    );
}

function MenuItem(props) {
    return (
        <div
            className={cn(
                "w-full h-full grow bg-cover p-4 flex flex-col items-start",
                `text-${props.color}`
            )}
            style={{ backgroundImage: `url(${props.img})` }}
        >
            <h1 className="text-2xl lg:text-4xl font-bold">{props.title}</h1>
            <p className="py-1 lg:py-4 lg:font-medium pr-16 line-clamp-3 lg:line-clamp-none">{props.desc}</p>
            <div className="grow"></div>
            <Button size="lg" variant="link" className={cn("hidden lg:flex justify-start", `text-${props.color}`)}>
                Explore
            </Button>
        </div>
    );
}

Menu.layout = (page) => <BaseLayout children={page} title="Menu" />;

export default Menu;
