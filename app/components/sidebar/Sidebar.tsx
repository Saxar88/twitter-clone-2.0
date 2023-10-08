"use client";

import { signOut } from "next-auth/react";
import { BiEnvelope, BiLogOut, BiSearch } from "react-icons/bi";
import { BsBellFill, BsBookmark, BsHouseFill } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";

import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarTweetButton from "./SidebarTweetButton";
import { SafeUser } from "@/app/types";

interface SidebarProps {
	currentUser?: SafeUser | null;
}

const Sidebar: React.FC<SidebarProps> = ({ currentUser }) => {
	const items = [
		{ label: "Home", href: "/", icon: BsHouseFill },
		{ label: "Explore", href: "/explore", icon: BiSearch },
		{ label: "Notifications", href: "/notifications", icon: BsBellFill },
		{ label: "Messages", href: "/messages", icon: BiEnvelope },
		{ label: "Lists", href: "/123/lists", icon: RiFileList2Line },
		{ label: "Bookmarks", href: "/bookmarks", icon: BsBookmark },
		{ label: "Communities", href: "/communities", icon: HiOutlineUsers },
		{ label: "Profile", href: "/users/123", icon: FaRegUser },
	];

	return (
		<div className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />
					{items.map((item) => (
						<SidebarItem
							key={item.href}
							href={item.href}
							icon={item.icon}
							label={item.label}
						/>
					))}
					<SidebarItem onClick={() => {}} icon={CiCircleMore} label="More" />
					{currentUser && (
						<SidebarItem
							onClick={() => signOut()}
							icon={BiLogOut}
							label="Logout"
						/>
					)}
					<SidebarTweetButton />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
