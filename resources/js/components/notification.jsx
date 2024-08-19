export function Notification(props)
{
    return (
        <div className="py-2 px-3 bg-primary text-xs lg:text-sm tracking-wide font-semibold flex items-center justify-center text-white text-center text-pretty">
            {props.children}
        </div>
    )
}