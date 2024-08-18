import { BaseLayout } from "@/layouts/base";

export function Home()
{
    return (
        <main>
        </main>
    )
}

Home.layout = page => <BaseLayout children={page} title="Restaurant Application" />

export default Home;