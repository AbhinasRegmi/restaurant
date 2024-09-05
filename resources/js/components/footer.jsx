import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <div className="text-sm flex flex-col lg:flex-row justify-center items-center px-3 py-2 border-t">
            <Button variant="link" className="uppercase py-0">
                Massimo
            </Button>
            <span>&copy; {new Date().getFullYear()} Made with love by abhinas</span>
        </div>
    );
}
