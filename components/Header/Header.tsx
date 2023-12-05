"use client";
import cn from "@/helpers";
import Link from "next/link";
import Icon from "../Icon";
import BurgerMenu from "../BurgerMenu";
import ButtomLink from "../ButtomLink";
import { useEffect, useState } from "react";

const Header = () => {

  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const ratio = entries.find(entry => entry.isIntersecting)?.intersectionRatio
      if (ratio) ratio < 1 ? setScrollHeader(true) : setScrollHeader(false)
    }, { threshold: [0, 0.5, 1] });

    const targetElement = document.getElementById("forheader") as HTMLElement;

    if (targetElement) observer.observe(targetElement);
    return () => {
      if (targetElement) observer.unobserve(targetElement);
    };
  }, []);


  return (
    <header id="header" className={cn("fixed top-0 w-full z-[1] py-9 d:py-6  ", scrollHeader ? 'bg-white-100' : ' bg-primaryBg', 'transition-colors')}>
      <div className="container border border-red-600  ">

        <div className="flex justify-between items-center ">
          <Link href="/" title="ecosolution" className=" hoverLight ">
            <Icon name='/assets/icons/Logo.svg' id='logo' className='w-[269px] h-[40px]  ' />
          </Link>

          <div className="flex gap-x-3  ">
            <BurgerMenu />

            <ButtomLink href='/' title="Get in touch" className=" hidden t:flex group hover:text-accent hover:bg-primary   bg-accent px-[17px] py-[10px]  gap-x-3">
              Get in touch
              <span className="flex items-center justify-center w-[14px] h-[14px] p-[1px] border border-primary rounded-full
               text-primary bg-primary group-hover:bg-accent group-hover:border-accent">
                <Icon name='/assets/icons/small.svg' id='arrow' className="w-full h-full " />
              </span>
            </ButtomLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
