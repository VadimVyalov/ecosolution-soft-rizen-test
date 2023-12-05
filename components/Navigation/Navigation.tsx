import Link from "next/link";
import cn from "@/helpers";
import Icon from "../Icon";
import { useEffect, useRef, useState } from "react";

interface NavigationProps {
  wrapCn?: string;
  itemCn?: string;
  linkCn?: string;
  mobile?: boolean;
  onClose?: () => void;
  open: boolean;
  menuItems: { id: string, title: string, link: string }[];
}

const Navigation = ({ mobile = false, itemCn = "", linkCn = "", wrapCn = '', menuItems, onClose, open }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {

    const sections = document.querySelectorAll<HTMLElement>('main > section');
    const sectionPad = document.querySelector<HTMLElement>('main > forheader');
    let active = 0
    let id: (string | null) = null

    const pad = sectionPad?.offsetHeight ? sectionPad.offsetHeight : 100

    if (!open) return

    sections.forEach((section) => {
      const top = window.scrollY
      const height = window.innerHeight - pad
      const offset = section.offsetTop - pad
      const sectionHeight = section.offsetHeight

      const sectionTop = offset - top;
      const sectionBottom = sectionTop + sectionHeight;

      let visible = 0

      if (sectionTop < 0 && sectionBottom > height) { visible = 1 }
      if (sectionTop <= 0) { visible = (sectionHeight + sectionTop) / height }
      if (sectionBottom >= height) { visible = (height - sectionTop) / height }
      if (sectionTop > 0 && sectionBottom < height) { visible = (sectionHeight) / height }


      if (sectionTop >= height || sectionBottom <= 0) { visible = 0 }



      if (visible > active) {
        active = visible
        id = section.getAttribute('id')
      }

    });

    setActiveSection(id)

  }, [open]);


  //console.log(activeSection);

  return (
    <nav className={cn(mobile ? "w-full" : "w-fit", " h-full")} >

      <ul className={cn("flex flex-col gap-y-2 ", wrapCn)}>
        {
          menuItems?.map(i => {
            return (
              <li key={i.id} className={cn("hover:text-white-100 transition  text-24xl", i.link === `/#${activeSection}` ? 'text-accent' : 'text-white-25', linkCn)}>
                <Link className={cn(" whitespace-nowrap  ", "flex gap-x-2 items-center", itemCn)}
                  title={i.title}
                  href={i.link}
                  onClick={onClose}
                > {i.title}
                  <Icon name='/assets/icons/small.svg' id='arrow'
                    className={cn('w-4 h-4 shrink-0 -rotate-[135deg]')} />
                </Link>

              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Navigation;
