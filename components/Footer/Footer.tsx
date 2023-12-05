'use client';
import Image from "next/image";
import Link from "next/link";
import useScreen from '@/hooks/useScreen';
import Navigation from "../Navigation";
import Social from "../Social";
import cn from "@/helpers";
import Icon from "../Icon";
import ButtomLink from "../ButtomLink";



const Footer = () => {
  const { isT } = useScreen();
  //console.log(isT)
  return (

    <div id="footer" className="container py-6 t:py-10 border-t border-accent">

      <div className="grid grid-cols-2 gap-6 d:gap-x-12 t:grid-cols-4 pb-6 t:pb-4 items-center">
        <Link href="/" title="ecosolution" className=" shrink-0 ">
          <Icon name='/assets/icons/Logo.svg' id='logo' className='w-[269px] h-[40px] hoverLight  ' />
        </Link>


        <Social className=" row-start-2 col-span-2 mx-auto t:col-span-1 t:col-start-3 t:row-start-1 t:ml-0 d:ml-[50%]" />

        <ButtomLink href='/#main' title="Go Up" className=" row-start-1 col-start-2  t:col-start-4 mr-0 ml-auto h-8 w-8  flex items-center justify-center group hover:text-accent hover:bg-primary   bg-accent ">
          <Icon name='/assets/icons/small.svg' id='arrow' className="rotate-180 " />
        </ButtomLink>
      </div >

      <div className="grid gap-y-4 t:gap-x-6 d:gap-x-12 justify-items-center t:grid-cols-4 items-center t:justify-center t:justify-items-start ">
        <span className=" whitespace-nowrap"> 79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>

        <Link href='email:' title="Go Up" className="t:col-start-3  d:ml-[50%]  "> office@ecosolution.com </Link>

        <span className=" t:col-start-4 flex t:mr-0 t:ml-auto"> ecosolution © 2023</span>
      </div>


    </div>

  );
};

export default Footer;
