import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import {cn} from "@/lib/utils";

export function Navbar(props) {
    // this cart should come from actual server or session within browser.
    const [cart, setCart] = useState(3);
    const { auth } = usePage().props;
    const navbarItems = [
        {
            label: "homepage",
            link: route("home"),
            label_key: "homepage",
            isActive: route().current('home') 
        },
        {
            label: "menu",
            link: route("menu"),
            isActive: route().current("menu"),
            label_key: "menu",
        },
        {
            label: "working hours",
            link: route("home"),
            isActive: route().current("workinghours"),
            label_key: "hours",
        },
        {
            label: "contact",
            link: route("home"),
            isActive: route().current("contact"),
            label_key: "contact",
        },
        {
            label: "order",
            link: route("order"),
            isActive: route().current("order"),
            label_key: "order",
            visible: !!auth.user,
        },
        {
            label: "login",
            link: "/auth/redirect/github",
            label_key: "login",
            external: true,
            visible: !!!auth.user,
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

function NavbarItem({visible = true, ...props}) {
    if(!visible)
    {
        return;
    }

    return (
        <Button
            asChild
            variant="link"
            className={cn("uppercase hover:text-muted-foreground text-foreground",
                props.isActive && "underline decoration-primary hover:text-primary",
            )}
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
