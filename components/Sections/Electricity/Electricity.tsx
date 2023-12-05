"use client";
import Section from "@/components/Section"
import ToSeparateString from "@/components/ToSeparateString";
import cn from "@/helpers";
import useRequestAnimationFrame from "@/hooks/useRequestAnimationFrame";
import { useState } from "react";


const startCount = 1134147814
const Electricity = () => {




    const [count, setCount] = useState(startCount);

    useRequestAnimationFrame(deltaTime => {

        setCount(prevCount => (prevCount + (deltaTime * 0.001) % 1000));
    });

    return (
        <Section id="electricity" className="">

            <h2 className=" font-oswald text-028xl t:text-036xl d:text-048xl uppercase text-center flex flex-col">
                <span className=" whitespace-nowrap">Electricity we produced</span> <span className=" whitespace-nowrap">for all time</span> </h2>
            <div className="grid grid-cols-2 py-6 d:py-4">
                <div className="h-12 t:h-[87px] border-r border-accent"></div>

            </div>
            <h3 className=" font-oswald font-bold text-048xl t:text-0100xl d:text-0164xl text-accent  flex items-center justify-center gap-2 t:gap-6">
                <ToSeparateString num={count} />
                <span className="text-024xl t:text-028xl d:text-048xl text-primary w-fit"> kWh</span>
            </h3>

        </Section>
    )
}

export default Electricity


