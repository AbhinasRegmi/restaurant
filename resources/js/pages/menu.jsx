import { BaseLayout } from "@/layouts/base";

function Menu()
{
    return(
        <div>
            Menu page
        </div>
    )
}

Menu.layout = page => <BaseLayout children={page} title="Menu" />

export default Menu;