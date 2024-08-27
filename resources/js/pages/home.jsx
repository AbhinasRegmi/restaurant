import { Featured } from "@/components/featured";
import { Offer } from "@/components/offer";
import { Slider } from "@/components/slider";
import { BaseLayout } from "@/layouts/base";
export function Home() {
    return (
        <section>
            <Slider />
            <Featured />
            <Offer />
        </section>
    );
}

Home.layout = (page) => (
    <BaseLayout children={page} title="Restaurant Application" />
);
export default Home;
