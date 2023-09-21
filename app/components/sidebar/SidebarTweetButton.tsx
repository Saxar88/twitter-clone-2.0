"use client";

import { useRouter } from "next/navigation";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
	const router = useRouter();

	return (
		<div onClick={() => router.push("/")}>
			<div className="flex items-center justify-center lg:hidden h-14 w-14 mt-6 p-4 bg-sky-500 hover:bg-opacity-80 rounded-full transition cursor-pointer">
				<FaFeather size={24} color="white" />
			</div>
			<div className="hidden lg:block mt-6 px-4 py-2 bg-sky-500 hover:bg-opacity-80 rounded-full transition cursor-pointer">
				<p className="hidden lg:block text-[20px] text-white font-semibold text-center">
					Tweet
				</p>
			</div>
		</div>
	);
};

export default SidebarTweetButton;
