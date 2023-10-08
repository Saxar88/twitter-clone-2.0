"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

import useCurrentUser from "@/app/hooks/useCurrentUser";
import useLogInModal from "@/app/hooks/useLogInModal";

interface SidebarItemProps {
	label: string;
	href?: string;
	icon: IconType;
	onClick?: () => void;
	auth?: boolean;
}

const SidebarItem = ({
	label,
	href,
	icon: Icon,
	onClick,
	auth,
}: SidebarItemProps) => {
	const { data: currentUser } = useCurrentUser();
	const logInModal = useLogInModal();
	const router = useRouter();
	const handleClick = useCallback(() => {
		if (onClick) return onClick();
		if (auth && !currentUser) {
			logInModal.onOpen();
		} else if (href) {
			router.push(href);
		}
	}, [onClick, auth, currentUser, logInModal, router, href]);

	return (
		<div onClick={handleClick} className="flex flex-row items-center">
			<div className="relative flex items-center justify-center lg:hidden h-14 w-14 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
				<Icon size={28} color="white" />
			</div>
			<div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
				<Icon size={24} color="white" />
				<p className="hidden lg:block text-xl text-white">{label}</p>
			</div>
		</div>
	);
};

export default SidebarItem;
