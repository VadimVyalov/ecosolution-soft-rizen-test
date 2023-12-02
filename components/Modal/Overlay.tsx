import { useKeyPress } from "@/hooks/useKeyPress";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useEffect } from "react";
import cn from "@/helpers";
interface ModalProps {
	className?: string;
	isOpen?: boolean;
	children?: React.ReactNode;
	onCloseMenu: () => void;
}

const Overlay = ({
	onCloseMenu,
	isOpen,
	className = "",
	children = null,

}: ModalProps) => {
	const { lockScroll, unlockScroll } = useScrollLock();
	useKeyPress("Escape", onCloseMenu);

	useEffect(() => {
		lockScroll();
		return () => unlockScroll();
	}, [isOpen, lockScroll, unlockScroll]);

	if (!isOpen) return null;


	return (
		<div className={cn("fixed top-0 left-0 w-[100vw]  h-[100vh] z-10 ", className)}
			onClick={onCloseMenu}
		>
			{children}
		</div>


	)
}

export default Overlay
