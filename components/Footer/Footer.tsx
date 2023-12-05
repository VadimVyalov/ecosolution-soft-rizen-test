'use client';
import Image from "next/image";
import Link from "next/link";
import useScreen from '@/hooks/useScreen';
import Navigation from "../Navigation";
import Social from "../Social";
import cn from "@/helpers";
import Icon from "../Icon";



const Footer = () => {
  const { isT } = useScreen();
  //console.log(isT)
  return (

    <div id="footer" className="container pb-8">



      <Link href="/" title="ecosolution" className=" shrink-0 ">
        <Icon name='/assets/icons/Logo.svg' id='logo' className='w-[269px] h-[40px] hover:text-accent  ' />
      </Link>


      <Social />

    </div>

  );
};

export default Footer;
