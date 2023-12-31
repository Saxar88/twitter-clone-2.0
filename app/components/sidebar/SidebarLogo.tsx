"use client";

import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push("/")}
			className="flex items-center justify-center h-14 w-14 p-4 rounded-full hover:bg-blue-300 hover:bg-opacity-10 transition cursor-pointer">
			<BsTwitter size={28} color="white" />
		</div>
	);
};

export default SidebarLogo;
