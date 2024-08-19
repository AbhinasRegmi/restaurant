import { BaseLayout } from "@/layouts/base";

function Order()
{
    return (
        <div>
            new stuff in this file this is order page
        </div>
    )
}

Order.layout = page => <BaseLayout children={page} />
export default Order;