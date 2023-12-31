"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
	label: string;
	showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
	const router = useRouter();

	const handleBack = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<div className="p-5 border-b-[1px] border-neutral-800">
			<div className="flex flex-row items-center gap-2">
				{showBackArrow && (
					<BiArrowBack
						onClick={handleBack}
						size={20}
						color="white"
						className="hover:opacity-70 transition cursor-pointer"
					/>
				)}
				<h1 className="text-xl font-semibold text-white">{label}</h1>
			</div>
		</div>
	);
};

export default Header;
