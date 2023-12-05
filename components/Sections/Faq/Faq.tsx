"use client";
import ButtomLink from "@/components/ButtomLink";
import Icon from "@/components/Icon";
import Section from "@/components/Section"
import cn from "@/helpers";
import Link from "next/link";
import { type } from "os";
import { useState } from "react";
const questions = [
    {
        id: "qsn-01",
        question: "How do wind turbines and solar panels work together in a renewable energy system?",
        answer: "Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."
    },
    {
        id: "qsn-02",
        question: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
        answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero. Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis."
    },
    {
        id: "qsn-03",
        question: "How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",
        answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero. Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis."
    },
    {
        id: "qsn-04",
        question: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
        answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero. Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis."
    },
    {
        id: "qsn-05",
        question: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
        answer: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero. Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis."
    },

]

export type FAQ = {
    id: string,
    question: string,
    answer: string,

}
type Props = {
    item: FAQ,
    isOpen: boolean,
    toogle: (id: string) => void,
}


const FaqItem = ({ item, isOpen, toogle }: Props) => {

    const { id, question, answer } = item
    return (

        <li className=" py-4 d:py-6 border-t border-accent w-full">

            <div onClick={() => toogle(isOpen ? 'not' : id)}
                className=" flex gap-x-2 t:gap-x-4 d:gap-x-6 items-center cursor-pointer ">
                <span title="learn more"
                    className="flex h-4 w-4 d:h-7 d:w-7 shrink-0  relative">
                    <Icon name="/assets/icons/small.svg" id="minus"
                        className={cn(" h-full w-full  transition duration-300", isOpen ? 'rotate-0' : 'rotate-90')}
                    />

                    <span className="flex absolute left-0 top-0 h-full w-full shrink-0 ">
                        <Icon name="/assets/icons/small.svg" id="minus"
                            className={cn(" h-full w-full")} />
                    </span>
                </span>

                <h3 className=" text-18xl d:text-24xl   text-justify"> {question} </h3>
            </div >

            <div className={cn(" pl-4 d:pl-7 overflow-hidden transition-[max-height] duration-300", isOpen ? "max-h-[500px] " : "max-h-0 ")}>
                <p className={cn(" mt-4 d:mt-6  pl-2 t:pl-4 d:pl-6 text-14xl d:text-16xl text-justify")}>  {answer} </p>
            </div>

        </li>


    )
}


const Faq = () => {
    const [opened, SetOpened] = useState(questions[0].id)
    return (
        <Section id="faq" className="">
            <div className="t:grid t:grid-cols-2 gap-6 d:gap-x-12">

                <h2 className="sectionTitle flex flex-col  pb-6 d:pl-[137px] t:col-start-2 t:row-start-1">
                    <span>Frequently Asked</span> <span>Questions</span> </h2>

                <ul className="flex flex-col items-center t:row-span-2">
                    {
                        questions?.map((item: FAQ) => {
                            return (
                                <FaqItem key={item.id} item={item} isOpen={opened === item.id} toogle={SetOpened} />
                            )
                        })

                    }

                </ul>

                <div className="t:col-start-2 t:row-start-2 flex flex-col justify-end items-center t:w-fit gap-y-3 d:pl-[137px]">

                    <p className="inline ml-0 mr-au text-center t:text-left text-18xl d:text-24xl">Didn't find the answer to your question?</p>
                    <ButtomLink href='/#contacts' title="Get in touch" className=" w-fit t:flex group hover:text-accent hover:bg-primary   bg-accent px-[17px] py-[10px]  gap-x-3">
                        Contact Us
                        <span className="flex items-center justify-center w-[14px] h-[14px] p-[1px] border border-primary rounded-full
                                    text-primary bg-primary group-hover:bg-accent group-hover:border-accent">
                            <Icon name='/assets/icons/small.svg' id='arrow' className="w-full h-full " />
                        </span>
                    </ButtomLink>
                </div>
            </div>
        </Section >
    )
}
export default Faq

 // return (
    //     <Section id="faq" className="container border border-red-600">
    //         <h2 className="text-028xl text-center uppercase pb-6"> Frequently Asked Questions </h2>
    //         <dl>
    //             <dt className="border-t border-accent py-4 text-18xl">
    //                 How do wind turbines and solar panels work together in a renewable energy system?
    //             </dt>
    //             <dd className="pb-4 text-14xl">
    //                 Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.</dd>
    //             <dt className="border-t border-accent py-4 text-18xl">
    //                 What sets EcoSolution's renewable energy solutions apart from others on the market?
    //             </dt>
    //             <dd className="pb-4 text-14xl">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero.
    //                 Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis.
    //             </dd>
    //             <dt className="border-t border-accent py-4 text-18xl">
    //                 How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?
    //             </dt>
    //             <dd className="pb-4 text-14xl">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero.
    //                 Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis.
    //             </dd>
    //             <dt className="border-t border-accent py-4 text-18xl">
    //                 What measures does EcoSolution take to ensure the environmental sustainability of its products?
    //             </dt>
    //             <dd className="pb-4 text-14xl">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero.
    //                 Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis.
    //             </dd>
    //             <dt className="border-t border-accent py-4 text-18xl">
    //                 How does EcoSolution engage with local communities and support a just transition to renewable energy?
    //             </dt>
    //             <dd className="pb-4 text-14xl">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra sit amet lacus quis imperdiet. Aliquam condimentum laoreet risus ac imperdiet. Nam sed risus id nibh ultrices pulvinar vitae non metus. Nulla nec mauris libero. Sed convallis auctor quam in finibus. Curabitur ultricies scelerisque risus, quis accumsan lacus volutpat eget. Nulla ac sodales elit. In at turpis vel libero rutrum scelerisque. Suspendisse velit purus, ultrices ut placerat dignissim, tempus in eros. Ut non felis libero.
    //                 Proin feugiat orci vel metus sodales iaculis. Ut viverra fermentum mi, ornare condimentum nunc sagittis eu. Morbi risus est, cursus vitae porttitor ut, interdum sed nulla. Quisque iaculis ornare arcu blandit vehicula. Nunc semper convallis tellus, vel elementum augue bibendum eget. Duis arcu sapien, condimentum nec odio porttitor, lobortis vulputate dolor. Integer sapien diam, euismod vel porta ac, volutpat sed urna. Sed tincidunt blandit dolor nec molestie. Sed a leo eu leo tincidunt ornare. Nunc nec purus a mauris ultricies vulputate quis sed sem. In hac habitasse platea dictumst. Aenean dolor dolor, auctor non ipsum vitae, pellentesque hendrerit velit. Duis hendrerit molestie dignissim. Maecenas finibus varius nisi quis mattis.
    //             </dd>
    //         </dl>
