import {BaseLayout} from "@/layouts/base";

function Category(props)
{
    return (
        <div>
            this is category {props.category}
        </div>
    )
}

Category.layout = page => <BaseLayout children={page} />
export default Category;