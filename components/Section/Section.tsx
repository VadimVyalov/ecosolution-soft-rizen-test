import Container from "../Container";
import cn from "@/helpers/cn"

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const Section = ({ children, className = "", id }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("", className)}
        >
            <Container>{children}</Container>
        </section>
    );
}

export default Section