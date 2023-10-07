"use client";

import { useCallback, useState } from "react";

import useLogInModal from "@/app/hooks/useLogInModal";

import Input from "../Input";
import Modal from "../Modal";

const LogInModal = () => {
	const logInModal = useLogInModal();

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

	return (
		<Modal
			disabled={isLoading}
			isOpen={logInModal.isOpen}
			title="Log in"
			actionLabel="Sign in"
			onClose={logInModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
		/>
	);
};

export default LogInModal;
