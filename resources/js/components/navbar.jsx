import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export function Navbar(props) {
    // this cart should come from actual server or session within browser.
    const [cart, setCart] = useState(3);
    const { auth } = usePage().props;
    console.log(auth);
    const navbarItems = [
        {
            label: "homepage",
            link: "/",
            label_key: "homepage",
        },
        {
            label: "menu",
            link: "/menu",
            label_key: "menu",
        },
        {
            label: "working hours",
            link: "/working hours",
            label_key: "hours",
        },
        {
            label: "contact",
            link: "/contact",
            label_key: "contact",
        },
        {
            label: !!auth.user ? "order" : "login",
            link: !!auth.user ? "/order" : "/auth/redirect/github",
            label_key: "login",
            external: true,
        },
        {
            element: (
                <div className="flex items-center justify-center gap-x-2 font-medium rounded-md p-2 px-6 lg:p-1 lg:px-3">
                    <ShoppingCart className="size-4" />
                    <span>cart ({cart})</span>
                </div>
            ),
            link: "/cart",
            label_key: "cart",
        },
        {
            element: (
                <div className="flex items-center justify-center gap-x-2 bg-primary/80 hover:bg-primary/100 text-white font-medium rounded-md p-2 px-6 lg:p-1 lg:px-3">
                    <Phone className="size-4" />
                    <span>555 77 00</span>
                </div>
            ),
            label_key: "phone",
        },
    ];

    return (
        <div className="flex items-center px-3 py-2 border border-primary/50">
            <Button variant="link" className="text-lg uppercase">
                Massimo
            </Button>

            <div className="hidden lg:flex">
                {navbarItems.map((item) => (
                    <NavbarItem key={item.label_key} {...item} />
                ))}
            </div>
            <div className="grow"></div>
            <div className="block lg:hidden">
                <MobileMenu>
                    <div className="flex flex-col gap-y-3">
                        {navbarItems.map((item) => (
                            <NavbarItem key={item.label_key} {...item} />
                        ))}
                    </div>
                </MobileMenu>
            </div>
        </div>
    );
}

function NavbarItem(props) {
    return (
        <Button
            asChild
            variant="link"
            className="uppercase hover:text-muted-foreground text-foreground"
        >
            {!!props.external ? (
                <a href={props.link ?? ""}>
                    {!!props.label ? props.label : props.element}
                </a>
            ) : (
                <Link href={props.link ?? ""}>
                    {!!props.label ? props.label : props.element}
                </Link>
            )}
        </Button>
    );
}
