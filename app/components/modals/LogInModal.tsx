"use client";

import { useCallback, useState } from "react";

import useLogInModal from "@/app/hooks/useLogInModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";

import Input from "../Input";
import Modal from "../Modal";

const LogInModal = () => {
	const logInModal = useLogInModal();
	const signUpModal = useSignUpModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			logInModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [logInModal]);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		logInModal.onClose();
		signUpModal.onOpen();
	}, [isLoading, logInModal, signUpModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disabled={isLoading}
			/>
			<Input
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className="mt-4 text-center text-neutral-400">
			<p>
				First time using Twitter?{" "}
				<span
					onClick={onToggle}
					className="text-white cursor-pointer hover:underline">
					Create an account!
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={logInModal.isOpen}
			title="Log in"
			actionLabel="Sign in"
			onClose={logInModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LogInModal;
