import { Button } from "@/components/ui/button";
import Countdown from "react-countdown";

export function Offer() {
    const offerValidDate = new Date("2024-10-12");

    return (
        <section className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 bg-black py-16 lg:py-32 text-primary-foreground lg:bg-[url('/offerBg.png')] ">
            <div className="flex-1 flex items-center justify-center">
                <div className="text-center flex flex-col items-center gap-y-5 px-8 text-pretty font-medium">
                    <h1 className="text-3xl font-semibold">
                        Delicious Burger & French Fries
                    </h1>
                    <p>
                        Progressively simplify effective e-toilers and process
                        centric methods of employment. Quickly pontificate
                        paralle.
                    </p>
                    <div className="text-4xl text-yellow-400">
                        <Countdown date={offerValidDate} />
                    </div>
                    <Button>Order Now</Button>
                </div>
            </div>
            <div className="flex-1 shrink-0 flex items-center justify-center">
                <img
                    className="h-full w-full object-cover rounded-sm"
                    src="/offerProduct.png"
                    alt="Offer item"
                />
            </div>
        </section>
    );
}
