import { BaseLayout } from "@/layouts/base";

function Cart(props)
{
    return (
        <div>
            this is cart page;
        </div>
    )
}

Cart.layout = page => <BaseLayout children={page} />
export default Cart;