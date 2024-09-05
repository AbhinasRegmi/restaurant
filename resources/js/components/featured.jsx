import { Button } from "@/components/ui/button";

export function Featured() {
    const featuredItems = [
        {
            title: "silican",
            description:
                "Ignite your taste buds with a fiery combination of spicy peporoni, jalapeneos, crushed red pepper flakes, and melted cheese, delivering a kick with every bite.",
            price: "24.90",
            imageUrl: "/temporary/p1.png",
        },
        {
            title: "bacon deluxe",
            description:
                "Ignite your taste buds with a fiery combination of spicy peporoni, jalapeneos, crushed red pepper flakes, and melted cheese, delivering a kick with every bite.",
            price: "32.45",
            imageUrl: "/temporary/p2.png",
        },
        {
            title: "bella napoli",
            description:
                "Ignite your taste buds with a fiery combination of spicy peporoni, jalapeneos, crushed red pepper flakes, and melted cheese, delivering a kick with every bite.",
            price: "10.99",
            imageUrl: "/temporary/p3.png",
        },
        {
            title: "super yummy",
            description:
                "Ignite your taste buds with a fiery combination of spicy peporoni, jalapeneos, crushed red pepper flakes, and melted cheese, delivering a kick with every bite.",
            price: "24.90",
            imageUrl: "/temporary/p4.png",
        },
        {
            title: "good stuff",
            description:
                "Ignite your taste buds with a fiery combination of spicy peporoni, jalapeneos, crushed red pepper flakes, and melted cheese, delivering a kick with every bite.",
            price: "24.90",
            imageUrl: "/temporary/p5.png",
        },
        {
            title: "nepali pizza",
            description:
                "Ignite your taste buds with a fiery combination of spicy peporoni, jalapeneos, crushed red pepper flakes, and melted cheese, delivering a kick with every bite.",
            price: "24.90",
            imageUrl: "/temporary/p6.png",
        },
    ];

    return (
        <div className="max-w-[100vw] overflow-hidden">
            <div className="flex w-full overflow-x-auto md:flex-wrap">
                {featuredItems.map((featuredItem) => (
                    <div className="w-full md:w-1/3 shrink-0 p-2">
                        <FeaturedItem
                            {...featuredItem}
                            key={featuredItem.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function FeaturedItem(props) {
    return (
        <section className="w-full hover:bg-primary/5 px-2 py-3 rounded-sm md:shadow-sm group">
            {/* When image rotates there is unexpected behaviour in last image.*/}
            <div className="max-h-[50vh] aspect-square mx-auto pointer-events-none">
                <img
                    className="h-full w-full object-cover rounded-sm group-hover:rotate-[360deg] transition-transform"
                    src={props.imageUrl}
                />
            </div>
            <div className="py-5 space-y-5">
                <div className="px-2 space-y-4">
                    <h3 className="text-center text-xl md:text-3xl font-medium md:font-semibold uppercase">
                        {props.title}
                    </h3>
                    <p className="font-normal leading-tight text-pretty">
                        {props.description}
                    </p>
                </div>
                <div className="space-y-3 flex flex-col justify-center items-center">
                    <p className="text-xl md:text-2xl font-medium md:font-semibold">
                        $ <span>{props.price}</span>
                    </p>
                    {/* TODO: what action to do when click not fixed. */}
                    <Button size="sm">Add to Cart</Button>
                </div>
            </div>
        </section>
    );
}
