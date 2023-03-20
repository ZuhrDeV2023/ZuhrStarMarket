import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";

const Login = () => {
	const [form, setForm] = useState({
		email: "eve.holt@reqres.in",
		password: "password",
	});
	const [errorMessage, setErrorMessage] = useState({
		type: "",
		message: "",
	});

	const [success, setSuccess] = useState({
		type: "",
		element: [],
	});

	const submitHandler = (evt) => {
		evt.preventDefault();

		fetch("https://reqres.in/api/login", {
			method: "POST",

			body: JSON.stringify(form),

			headers: {
				"Content-type": "application/json",
			},
		})
			.then((res) => {
				if (res.status === 400) {
					throw new Error("User not found");
				}
				return res.json();
			})
			.then((data) => {
				if (data.token) {
					window.localStorage.setItem("token", data.token);

					setSuccess({
						type: "success",
						element: [],
					});
				}
			})
			.catch((err) => {
				setErrorMessage({
					type: "bg-red-400",
					message: "User not found",
				});

				setTimeout(() => {
					setErrorMessage({
						type: "",
						message: "",
					});
				}, 2000);
			});
	};

	return (
		<Layout>
			<div className="container flex flex-col items-center justify-center px-6 py-8 mx-auto mt-10">
				<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md bg-violet-700">
					<div className="p-6">
						<h1 className="mb-4 text-xl font-bold text-white">Login to your account</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Your email
								</label>
								<input
									onChange={(evt) => {
										setForm({
											...form,
											email: evt.target.value,
										});
									}}
									value={form.email}
									type="email"
									name="email"
									id="email"
									className="w-full px-3 py-2 rounded-lg"
									placeholder="name@company.com"
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Password
								</label>
								<input
									value={form.password}
									onChange={(evt) => {
										setForm({
											...form,
											password: evt.target.value,
										});
									}}
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="w-full px-3 py-2 rounded-lg"
								/>
							</div>
							{errorMessage.type === "bg-red-400" && (
								<p className="text-xs text-red-400">{errorMessage.message}</p>
							)}

							<div className="flex items-center justify-between cursor-pointer">
								<div className="flex items-start ">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded cursor-pointer "
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-gray-500 cursor-pointer dark:text-gray-300">
											Remember me
										</label>
									</div>
								</div>
								<p className="text-sm font-medium text-zinc-400 hover:text-zinc-200">Forgot password?</p>
							</div>

							{success.type === "success" ? (
								<Link to="/">
									<button className="w-full py-2 text-sm font-bold text-white border rounded-lg border-violet-300 hover:bg-violet-600 ">
										The information is entered correctly, click to go to the home page
									</button>
								</Link>
							) : (
								<button
									type="submit"
									className="w-full py-2 text-sm font-bold text-white border rounded-lg border-violet-300 hover:bg-violet-600 "
								>
									Login
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Login;
