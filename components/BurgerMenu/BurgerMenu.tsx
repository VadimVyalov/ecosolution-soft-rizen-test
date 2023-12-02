"use client";
import cn from "@/helpers";
import Icon from "../Icon";
import Overlay from "../Modal/Overlay";
import { useState } from "react";
import Navigation from "../Navigation";
import Social from "../Social";




const BurgerMenu = () => {


	const menuHeader = [
		{ id: "mh-01", title: "Main", link: "/#main" },
		{ id: "mh-02", title: "About", link: "/#about" },
		{ id: "mh-03", title: "Cases", link: "/#cases" },
		{ id: "mh-04", title: "FAQ", link: "/#faq" },
		{ id: "mh-05", title: "Contacts", link: "/#contacts" },
	];

	const [open, setOpen] = useState(false);
	const onCloseMenu = () => { setOpen(false) };
	const onOpenMenu = () => { setOpen(true) };


	return (
		<>

			<button title="menu" onClick={onOpenMenu} className={cn('flex justify-center items-center rounded-full bg-some hover:bg-accent w-10 h-[39px] ')}>
				<Icon name='/assets/icons/small.svg' id='menu' className={cn(' transition-all duration-200')} />
			</button>


			<div className={cn(" fixed   top-0  bottom-0 right-0 left-0 ", open ? "z-20" : "z-[-1]")} onClick={onCloseMenu}>
				<div className="container py-9 d:py-6 overflow-hidden  h-full"
				>

					<div className={cn(open ? "translate-x-0" : "translate-x-[150%]", "transition-all duration-500 h-full w-[320px] d:w-[365px]  ml-auto mr-0 p-6",
						"bg-primary text-white-25 rounded-[25px]  flex flex-col ")}
						onClick={(e) => { e.stopPropagation() }}
					>
						<button onClick={onCloseMenu}> close </button>

						<Navigation
							menuItems={menuHeader}
							mobile={true}
							wrapCn='pt-4 border-t border-white-100'
							onClose={onCloseMenu}
							open={open}
						/>
						<Social />
					</div>
				</div>
			</div>

			{(open) ? <Overlay onCloseMenu={onCloseMenu} isOpen={open} className=" bg-overlay backdrop-blur-[2px] " /> : null}

		</>);
}

export default BurgerMenu


