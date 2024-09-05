import { Head } from "@inertiajs/react";
import { Notification } from "@/components/notification";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function BaseLayout(props) {
    return (
        <main className="flex flex-col min-h-screen">
            <Head title={props.title ?? "Restaurant"} />
            <Notification>
                <p>
                    Free delivery for all orders over <strong>$50</strong>. Order your food now.
                </p>
            </Notification>
            <Navbar />
            <div className="grow text-red-600">{props.children}</div>
            <Footer />
        </main>
    );
}
