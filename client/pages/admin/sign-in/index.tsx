import DefaultLayout from "@/layouts/default";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { auth } from "@/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Spacer } from "@heroui/spacer";
import { Button } from "@heroui/button";

const AdminSignInPage = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({});

	const router = useRouter();

	const handleSignInFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.email) {
			setErrors({ errors, email: "Kérjük adjon meg egy email címet!" });
		}

		if (!form.password) {
			setErrors({ errors, password: "Kérjük adjon meg egy jelszót!" });
		}

		if (!(form.email && form.password)) {
			return;
		}

		try {
			await signInWithEmailAndPassword(auth, form.email, form.password);
			router.push("/admin");
		} catch (error) {
			setErrors({ password: "Hibás email cím vagy jelszó!" });
		}
	};

	return (
		<DefaultLayout isCentered withoutNavbar>
			<Card
				className="px-10 py-10 w-[90vw] max-w-[450px]"
				shadow="sm"
				radius="lg"
			>
				<CardHeader>
					<h1 className="tracking-tight inline font-bold text-3xl">
						Bejelentkezés
					</h1>
				</CardHeader>
				<CardBody>
					<Form
						className="w-full"
						validationBehavior="aria"
						validationErrors={errors}
						onSubmit={handleSignInFormSubmit}
					>
						<Input
							isRequired
							label="Email"
							labelPlacement="inside"
							size="sm"
							name="email"
							type="email"
							value={form.email}
							onChange={(e) => {
								setForm({ ...form, email: e.target.value });
							}}
						/>
						<Input
							isRequired
							label="Jelszó"
							labelPlacement="inside"
							size="sm"
							name="password"
							type="password"
							value={form.password}
							onChange={(e) => {
								setForm({ ...form, password: e.target.value });
							}}
						/>

						<Spacer y={2} />

						<Button type="submit" color="primary" variant="solid">
							Bejelentkezés
						</Button>
					</Form>
				</CardBody>
			</Card>
		</DefaultLayout>
	);
};

export default AdminSignInPage;
