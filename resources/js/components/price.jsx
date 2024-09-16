import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ItemPrice(props) {
    const [option, setOption] = useState(
        props.options ? props.options[0].price : props.amount
    );
    const [quantity, setQuantity] = useState(1);
    const totalPrice = option * quantity;

    function toggleQuantity(increase = true) {
        if (quantity <= 9 && increase) {
            setQuantity((q) => q + 1);
        }

        if (quantity >= 2 && !increase) {
            setQuantity((q) => q - 1);
        }
    }

    return (
        <section className="py-6 lg:py-12">
            <div className="flex items-center gap-4 lg:gap-6 pb-4">
                <h1 className="text-xl lg:text-2xl font-semibold">$ {totalPrice}</h1>
                {props.options && (
                    <ToggleGroup
                        type="single"
                        size="lg"
                        value={option}
                        onValueChange={(value) => {
                            if (value) setOption(value);
                        }}
                    >
                        {props.options.map((option) => (
                            <ToggleGroupItem
                                key={option.label}
                                value={option.price}
                            >
                                {option.label}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                )}
            </div>
            <div className="flex border border-primary items-center justify-start w-fit pl-3">
                <div className="flex items-center justify-start">
                    <span className="pr-2 lg:pr-6">Quantity</span>
                    <div className="flex items-center">
                        <Button
                            variant="icon"
                            onClick={() => toggleQuantity(false)}
                        >
                            <ChevronLeft />
                        </Button>
                        <span className="text-xl">{quantity}</span>
                        <Button
                            variant="icon"
                            onClick={() => toggleQuantity(true)}
                        >
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
                <div className="bg-primary">
                    <Button
                        variant="icon"
                        className="text-primary-foreground w-full rounded-none"
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </section>
    );
}
