import ButtomLink from "@/components/ButtomLink"
import Icon from "@/components/Icon"
import Section from "@/components/Section"
import Image from "next/image"
import Link from "next/link"


const Main = () => {

    return (
        <Section id="main" className="  pt-[110px] t:pt-[134px] d:pt-[176px]">

            <div className="grid gap-6 d:gap-x-12 d:gap-y-0 justify-items-center t:grid-cols-2  t:justify-center t:justify-items-start ">
                <h1 className=" font-oswald text-036xl t:text-048xl d:text-064xl uppercase row-span-2 w-[300px] t:w-[280px] d:w-[480px] ml-0 mr-auto">
                    RENEWABLE ENERGY For any task
                </h1>

                <span className=" pt-2 d:ml-[137px] d:mr-[90px] text-justify"> Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass </span>

                <ButtomLink href='/#cases' title="Get in touch" className=" t:col-start-2 t:row-start-2 flex group hover:text-accent hover:bg-primary  border border-accent 
                                                                   h-fit p-[3px] pl-[17px] d:ml-[137px] gap-x-3 mb-0 mt-auto">
                    Learn more
                    <span className="flex items-center justify-center w-8 h-8  border border-accent rounded-full group-hover:bg-primary:
               text-primary bg-accent">
                        <Icon name='/assets/icons/small.svg' id='arrow' className="" />
                    </span>
                </ButtomLink>
            </div>

            <div className="grid gap-y-4 t:gap-x-6 d:gap-x-12 justify-items-center t:grid-cols-4 items-center t:justify-center t:justify-items-start 
                        mt-6 mb-9 pt-6  t:mb-10 t:pt-4  d:mb-9 d:pt-3  border-t border-accent">
                <span className=" whitespace-nowrap"> 79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>

                <Link href='mailto:office@ecosolution.com' title="send e-mail" className="t:col-start-3  d:ml-[50%]  "> office@ecosolution.com </Link>

                <span className=" t:col-start-4 flex t:mr-0 t:ml-auto"> ecosolution © 2023</span>
            </div>

            <Image className=" "
                src='/assets/main.jpg'
                alt='main'
                width={1240}
                height={524}
                priority
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />

        </Section>
    )
}
export default Main