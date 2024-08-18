import { BaseLayout } from "@/layouts/base";
import { Head } from "@inertiajs/react";

export function Home()
{
    return (
        <main>
        this is home
        </main>
    )
}

Home.layout = page => <BaseLayout children={page} title="Restaurant Application" />

export default Home;