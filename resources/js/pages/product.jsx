import { BaseLayout } from "@/layouts/base";

function Product(props) {
    return (
        <div>
            product {props.productId}
        </div>
    );
}

Product.layout = (page) => <BaseLayout children={page} />;
export default Product;
