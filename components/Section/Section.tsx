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
            className={cn(" py-9 t:py-[50px] d:py-[60px]", className)}
        >
            <Container className="container">{children}</Container>
        </section>
    );
}

export default Section