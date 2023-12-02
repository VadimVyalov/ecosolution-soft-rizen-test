import cn from "@/helpers/cn"
interface ContainerProps {
    className?: string;
    children: React.ReactNode;

}

const Container = ({ className = "", children }: ContainerProps) => {
    return (
        <div
            className={cn("", className)}
        >
            {children}
        </div>
    );
}
export default Container