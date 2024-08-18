import { BaseLayout } from "@/layouts/base";

function Order()
{
    return (
        <div>
            this is order page
        </div>
    )
}

Order.layout = page => <BaseLayout children={page} />
export default Order;