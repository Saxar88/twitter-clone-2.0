import { BiSearch } from "react-icons/bi";

const Trending = () => {
	return (
		<div className="hidden lg:block mt-2 ml-4 px-2">
			<div className="flex items-center mt-2 p-3 space-x-2 bg-twitterSecondaryDark rounded-full">
				<BiSearch size={16} color="#71767b" />
				<input
					type="text"
					placeholder="Search"
					className="flex-1 bg-twitterSecondaryDark font-light text-twitterTextSecondary outline-none"
				/>
			</div>
			<div className="mt-4 bg-twitterSecondaryDark text-twitterTextDark rounded-[20px]">
				<h2 className="px-4 py-3 text-xl font-extrabold">Who to follow</h2>
			</div>
			<div className="mt-4 bg-twitterSecondaryDark text-twitterTextDark rounded-[20px]">
				<h2 className="px-4 py-3 text-xl font-extrabold">Trends for you</h2>
			</div>
		</div>
	);
};

export default Trending;
