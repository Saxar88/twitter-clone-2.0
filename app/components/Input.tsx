interface InputProps {
	placeholder?: string;
	value?: string;
	type?: string;
	disabled?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	value,
	type,
	disabled,
	onChange,
}) => {
	return (
		<input
			disabled={disabled}
			onChange={onChange}
			placeholder={placeholder}
			value={value}
			type={type}
			className="w-full p-4 text-lg text-white bg-black disbaled:bg-neutral-900 disabled:opacity-70 outline-none border-2 focus:border-2 border-neutral-800 focus:border-sky-500 rounded-md transition disabled:cursor-not-allowed"
		/>
	);
};

export default Input;
