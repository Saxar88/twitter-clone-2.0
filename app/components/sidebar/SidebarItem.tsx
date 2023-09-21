import { IconType } from "react-icons";

interface SidebarItemProps {
	label: string;
	href?: string;
	icon: IconType;
	onClick?: () => void;
}

const SidebarItem = ({
	label,
	href,
	icon: Icon,
	onClick,
}: SidebarItemProps) => {
	return (
		<div className="flex flex-row items-center">
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
