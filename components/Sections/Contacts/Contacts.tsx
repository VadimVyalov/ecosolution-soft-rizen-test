"use client";

import Section from "@/components/Section"
import Social from "@/components/Social"
import Link from "next/link"
import cn from "@/helpers";
import Icon from "@/components/Icon";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface InputNP {
    name: string;
    email: string;
    phone: string;
    mesage?: string;
}

const schema = yup.object().shape({
    name: yup.string().required("Wrong Fullname").min(2, "min 2 symbol").max(50, "max 50 symbol"),
    email: yup.string().required("Wrong Email").email('Wrong Email').matches(/^(?!.*@[^,]*,)/, "Incorrect pattern"),
    phone: yup.string().required("Wrong Phone").matches(/^380\d{9}$/, "Incorrect pattern"),
    mesage: yup.string(),

});
const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputNP>({ resolver: yupResolver(schema) });
    const onSubmit = (data: InputNP) => {
        console.log(data);
    };
    return (
        <Section id="contacts" className=" ">
            <h2 className="sectionTitle pb-6 t:pb-10 d:pb-[120px] text-center  mx-auto"> Contact Us </h2>
            <div className="t:grid t:grid-cols-2 t:gap-8 d:gap-12">
                <dl>
                    <dt className="pb-2">Phone:</dt>
                    <dd className="pb-6 text-20xl">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href="tel:380981234567" title="Call Us"
                                    className="flex gap-x-2 shrink-0 bg-transparent group">
                                    <Icon name='/assets/icons/small.svg' id='phone'
                                        className={cn('w-6 h-6 hoverLight group-hover:text-accent')}
                                    />
                                    38 (098) 12 34 567
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:380931234567" title="Call Us"
                                    className="flex gap-x-2 shrink-0 bg-transparent group">
                                    <Icon name='/assets/icons/small.svg' id='phone'
                                        className={cn('w-6 h-6 hoverLight group-hover:text-accent')}
                                    />
                                    38 (093) 12 34 567
                                </Link>
                            </li>
                        </ul>
                    </dd>
                    <dt className="pb-2">E-mail:</dt>
                    <dd className="pb-6 text-20xl">
                        <Link href="mailto:office@ecosolution.com" title="Email Us"
                            className="flex gap-x-2 shrink-0 bg-transparent group">
                            <Icon name='/assets/icons/small.svg' id='email'
                                className={cn('w-6 h-6 hoverLight group-hover:text-accent')}
                            />office@ecosolution.com
                        </Link>
                    </dd>
                    <dt className="pb-2">Address:</dt>
                    <dd className="pb-6 text-20xl">
                        <Link href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8313557,24.0300883,17z/data=!4m6!3m5!1s0x473add6785a9dce5:0x92b4b3ec68e99c14!8m2!3d49.8313523!4d24.0349592!16s%2Fg%2F1wf37ccl?entry=ttu" title="Email Us"
                            target="_blank" rel="noopener noreferrer"
                            className="flex gap-x-2 shrink-0 bg-transparent group">
                            <Icon name='/assets/icons/small.svg' id='map'
                                className={cn('w-6 h-6 hoverLight group-hover:text-accent')}
                            />
                            <address className="not-italic">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</address>
                        </Link>

                    </dd>
                    <dt className="pb-2">Social Networks:</dt>
                    <dd className="pb-6 text-20xl">
                        <Social className="p-3 gap-x-[29px] w-fit" />
                    </dd>
                </dl>


                <form className="flex py-9 px-3 t:px-6   d:p-12  flex-col gap-y-4 d:gap-y-8 bg-secondaryBg " onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-x-5 gap-y-1.5  d:gap-y-0.5  ">

                        <div className="flex flex-col gap-y-2 d:gap-y-3 w-full ">
                            <label className={cn("  border-b border-accent transition-colors ", errors.name ? "border-error" : "border-accent")} >* Full name:
                                <input {...register("name")} placeholder="John Rosie"
                                    className="outline-none bg-transparent text-18xl d:text-20xl text-primary placeholder:text-placeholder pt-2 d:pt-3  w-full  " />
                            </label>

                            {errors.name ? <p className=" text-error text-12xl text-right">{errors.name.message}</p> : <p className="text-12xl text-transparent">ok</p>}
                        </div>

                        <div className="flex flex-col gap-y-2 d:gap-y-3 w-full ">
                            <label className={cn("  border-b border-accent transition-colors ", errors.name ? "border-error" : "border-accent")}>* E-mail:
                                <input {...register("email")} placeholder="johnrosie@gmail.com"
                                    className="outline-none bg-transparent text-18xl d:text-20xl text-primary placeholder:text-placeholder pt-3  w-full  " />
                            </label>

                            {errors.email ? <p className=" text-error text-xs">{errors.email.message}</p> : <p className="text-xs text-transparent">ok</p>}
                        </div>

                        <div className="flex flex-col gap-y-2 d:gap-y-3 w-full ">
                            <label className={cn("  border-b border-accent transition-colors ", errors.name ? "border-error" : "border-accent")}>* Phone:
                                <input {...register("phone")} placeholder="380961234567"
                                    className="outline-none bg-transparent text-18xl d:text-20xl text-primary placeholder:text-placeholder pt-3  w-full  " />
                            </label>
                            {errors.phone ? <p className=" text-error text-xs">{errors.phone.message}</p> : <p className="text-xs text-transparent">ok</p>}
                        </div>

                        <div className="flex flex-col gap-y-2 d:gap-y-3 w-full ">
                            <label className={cn("  border-b border-accent transition-colors ", errors.name ? "border-error" : "border-accent")}>Message
                                <textarea {...register("mesage")} placeholder="My message...." rows={5}
                                    className="outline-none bg-transparent text-18xl d:text-20xl text-primary placeholder:text-placeholder pt-3  w-full resize-none " />
                            </label>

                        </div>
                    </div>

                    <button type="submit" className=" flex group hover:text-accent hover:bg-primary  border border-accent 
                            rounded-full w-fit items-center transition-colors duration-200 h-fit p-[3px] pl-[17px] gap-x-3 mb-0 mt-auto ml-auto mr-0">
                        Send
                        <span className="flex items-center justify-center w-8 h-8  border border-accent rounded-full group-hover:bg-primary:
               text-primary bg-accent">
                            <Icon name='/assets/icons/small.svg' id='arrow' className="-rotate-90" />
                        </span>
                    </button>

                </form>
            </div>


        </Section>
    )
}
export default Contacts