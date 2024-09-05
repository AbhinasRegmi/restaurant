import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

export function MobileMenu(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? (
                        <AlignJustify className="size-6" />
                    ) : (
                        <X className="size-6 invisible" />
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="hidden">
                    <SheetTitle>Mobile menu</SheetTitle>
                    <SheetDescription>This will open only in mobile view.</SheetDescription>
                </div>
                <div className="py-6">{props.children}</div>
            </SheetContent>
        </Sheet>
    );
}
