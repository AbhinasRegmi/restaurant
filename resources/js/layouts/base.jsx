import { Head } from "@inertiajs/react";

export function BaseLayout(props)
{
    return (
        <div>
            <Head title={props.title ?? 'Restaurant'} />
            {props.children}
        </div>
    )
}