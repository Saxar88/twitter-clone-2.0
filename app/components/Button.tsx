interface ButtonProps {
	label: string;
	secondary?: boolean;
	fullWidth?: boolean;
	large?: boolean;
	onClick: () => void;
	disabled?: boolean;
	outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	secondary,
	fullWidth,
	large,
	onClick,
	disabled,
	outline,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${fullWidth ? "w-full" : "w-fit"} ${
				secondary
					? "bg-white text-black border-black"
					: "bg-twitter text-white border-twitter"
			} ${large ? "px-5 py-3 text-xl" : "px-4 py-2 text-md"} ${
				outline ? "bg-transparent border-white text-white" : ""
			} font-semibold border-2 rounded-full hover:opacity-80 transition disabled:opacity-70 disabled:cursor-not-allowed`}>
			{label}
		</button>
	);
};

export default Button;
