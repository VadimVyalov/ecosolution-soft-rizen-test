
import Section from "@/components/Section"
import Image from "next/image"
import cn from "@/helpers";
import Icon from "@/components/Icon";


const card = [
    {
        id: 'vc-01',
        smallCard: [
            {
                id: 'maximize-circle',
                title: 'Openness',
                description: 'to the world, people, new ideas and projects'
            },
            {
                id: 'global-edit',
                title: 'Responsibility',
                description: 'we are aware that the results of our work have an impact on our lives and the lives of future generations'
            }
        ],
        image: '/assets/about-01.jpg'
    },
    {
        id: 'vc-02',
        smallCard: [
            {
                id: 'cpu-charge',
                title: 'Innovation',
                description: 'we use the latest technology to implement non-standard solutions'
            },
            {
                id: 'ranking',
                title: 'Quality',
                description: 'we do not strive to be the first among others, but we want to be the best in our business'
            }
        ],
        image: '/assets/about-02.jpg'
    }
]

type SmallCard = {
    id: string,
    title: string,
    description: string
}

type ValueCard = {
    id: string,
    smallCard: SmallCard[],
    image: string
}

const ValuesSmallCard = ({ id, title, description }: SmallCard) => {
    return (
        <div key={id} className="bg-secondaryBg p-3 d:px-6  d:py-12  ">
            <h3 className=" font-oswald text-016xl t:text-018xl d:text-032xl  uppercase 
            flex items-center gap-x-2 pb-[33px] t:pb-[51px] d:pb-[94px] border-b border-accent">

                <Icon name='/assets/icons/small.svg' id={id}
                    className={cn('d:w-6 d:h-6 ')}
                />
                {title}
            </h3>

            <p className="text-14xl d:text-16xl pt-3 d:pt-6">
                {description}
            </p>
        </div>
    )
}

const ValuesCard = ({ id, smallCard, image }: ValueCard) => {
    return (
        <li key={id} className="grid grid-cols-2 t:grid-cols-4  gap-6 d:gap-12 group h-[197px] d:h-[339px]">

            {smallCard.map(item => <ValuesSmallCard key={item.id} {...item} />)}

            <div className="hidden t:flex group-even:order-first col-span-2 ">
                <Image className="hidden t:flex group-even:order-first col-span-2 "
                    src={image}
                    alt='work'
                    width={596}
                    height={339}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
        </li>
    )
}


const About = () => {

    return (
        <Section id="about" className="  ">


            <div className="grid grid-cols-1 t:grid-cols-2 pb-9 t:pb-[100px] d:pb-[120px]">
                <h2 className=" font-oswald text-028xl t:text-036xl d:text-048xl uppercase text-left p-0 t:pr-[100px] d:pr-[260px] pb-6"> Main values of our company </h2>

                <p className="p-0 t:pl-[10px] d:pl-[160px] text-justify h-full border-l border-accent">
                    EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.
                </p>
            </div>

            <ul className="grid gap-6  d:gap-12 " >
                {card?.map(item => <ValuesCard key={item.id} {...item} />)}
            </ul>
        </Section>
    )
}
export default About