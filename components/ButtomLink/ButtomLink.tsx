import cn from "@/helpers/cn"
import Link from "next/link";
interface ButtomLink {
    href: string;
    title: string;
    iconId?: string;
    className?: string;
    children: React.ReactNode;

}

const ButtomLink = ({ href, title, className = "", children }: ButtomLink) => {
    return (
        <Link href={href} title={title}
            className={cn("rounded-full  flex items-center transition-colors duration-200", className)}
        >
            {children}
        </Link>
    );
}
export default ButtomLink