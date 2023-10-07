"use client";

import { useCallback, useState } from "react";

import useLogInModal from "@/app/hooks/useLogInModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";

import Input from "../Input";
import Modal from "../Modal";

const SignUpModal = () => {
	const logInModal = useLogInModal();
	const signUpModal = useSignUpModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			signUpModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [signUpModal]);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		signUpModal.onClose();
		logInModal.onOpen();
	}, [isLoading, logInModal, signUpModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				disabled={isLoading}
			/>
			<Input
				placeholder="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				disabled={isLoading}
			/>
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
				Already have an account?{" "}
				<span
					onClick={onToggle}
					className="text-white cursor-pointer hover:underline">
					Sign in
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={signUpModal.isOpen}
			title="Create your account"
			actionLabel="Sign up"
			onClose={signUpModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default SignUpModal;
