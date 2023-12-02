import cn from "@/helpers";
import Link from "next/link";
import Icon from "../Icon";
const Social = ({ className = '' }) => {
    return (
        <div className={cn("flex gap-x-5", className)}>
            <Link href="#facebook" title="Facebook" className='flex shrink-0  bg-transparent hover:text-accent'>
                <Icon name='/assets/icons/social.svg' id='facebook'
                    className={cn('w-6 h-6 shrink-0')}
                />
            </Link>
            <Link href="#instagramm" title="Instagram" className="flex shrink-0 bg-transparent hover:text-accent">
                <Icon name='/assets/icons/social.svg' id='instagram'
                    className={cn('w-6 h-6 shrink-0')}
                />
            </Link>
        </div>
    )
}

export default Social