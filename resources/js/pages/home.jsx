import { BaseLayout } from "@/layouts/base";
export function Home()
{
    return (
        <main>
            This is the home page.
        </main>
    )
}

Home.layout = page => <BaseLayout children={page} title="Restaurant Application" />
export default Home;