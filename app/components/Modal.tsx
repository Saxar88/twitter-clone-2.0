"use client";

import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
}) => {
	const handleClose = useCallback(() => {
		if (disabled) return;

		onClose();
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) return;

		onSubmit();
	}, [disabled, onSubmit]);

	if (!isOpen) return null;

	return (
		<>
			<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-neutral-800 bg-opacity-70 outline-none focus:outline-none">
				<div className="relative w-full lg:w-3/6 lg:max-w-3xl h-full lg:h-auto mx-auto my-6">
					<div className="relative h-full lg:h-auto flex flex-col w-full bg-black outline-none focus:outline-none border-0 rounded-lg shadow-lg">
						<div className="flex items-center justify-between p-10 rounded-t">
							<h3 className="text-3xl font-semibold text-white">{title}</h3>
							<button
								onClick={handleClose}
								className="ml-auto p-1 text-white border-0 hover:opacity-70 transition">
								<AiOutlineClose size={20} />
							</button>
						</div>
						<div className="relative flex-auto p-10">{body}</div>
						<div className="flex flex-col gap-2 p-10">
							<Button
								onClick={handleSubmit}
								disabled={disabled}
								label={actionLabel}
								secondary
								fullWidth
								large
							/>
							{footer}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
