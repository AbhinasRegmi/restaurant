import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "@inertiajs/react";

export function Slider() {
    const data = [
        {
            title: "always fresh & always crispy & always hot",
            imageUrl: "/slide1.png",
        },
        {
            title: "we deliver your order wherever  you are in",
            imageUrl: "/slide2.png",
        },
        {
            title: "the best pizza to share with your family",
            imageUrl: "/slide3.jpg",
        },
    ];

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {data.map((item) => (
                    <CarouselItem key={item.imageUrl}>
                        <div className="h-[86vh]">
                            <div className="h-full flex flex-col lg:flex-row p-1 lg:p-6">
                                <div className="h-1/3 lg:h-full lg:w-1/3 shrink-0 px-8 lg:px-2 flex items-center justify-center flex-col">
                                    <h2 className="text-3xl lg:text-4xl text-center py-4 uppercase font-normal text-pretty lg:font-semibold leading-0">
                                        {item.title}
                                    </h2>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="font-semibold tracking-wide"
                                    >
                                        <Link href="/order">Order Now</Link>
                                    </Button>
                                </div>

                                <div className="h-2/3 lg:h-full lg:w-2/3 shrink-0 grow pt-2">
                                    <img
                                        className="h-full w-full object-cover rounded-sm"
                                        src={item.imageUrl}
                                    />
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}
