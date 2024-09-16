import { ItemPrice } from "@/components/price";
import { BaseLayout } from "@/layouts/base";

function Product(props) {
    const options = [
        {
            label: "small",
            price: 15,
        },
        {
            label: "medium",
            price: 30,
        },
        {
            label: "large",
            price: 50,
        },
    ];
    const data = {
        name: "Some random stuff",
        img: "/temporary/p1.png",
        desc: "this is also some random description",
        options,
    };

    return (
        <div className="flex flex-col gap-y-4 lg:flex-row p-7">
            <div className="h-[30vh] lg:h-[70vh] w-auto lg:w-1/2 lg:grow-0 mx-auto">
                <img
                    src={data.img}
                    alt=""
                    className="w-auto h-full object-cover"
                />
            </div>
            <div className="grow flex flex-col justify-center items-center">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold">
                        {data.name}
                    </h1>
                    <p className="font-semibold">{data.desc}</p>
                </div>
                <ItemPrice options={data.options} />
            </div>
        </div>
    );
}

Product.layout = (page) => <BaseLayout children={page} />;
export default Product;
