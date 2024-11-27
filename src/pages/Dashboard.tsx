import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import userApi from "../api/module/user.api";
import Button, { OutlineButton } from "../components/button/Button";
import { API_STATUS } from "../constants/general.constant";
import { IFormLogin } from "../interface/general.interface";
import "./dashboard.scss";



const Dashboard = () => {
	const methods = useForm<IFormLogin>({
		defaultValues: {
			example: "",
			exampleRequired: "",
			email: "",
			password: "",
		},
	});
	const onSubmit = (data: IFormLogin) => alert(JSON.stringify(data));

	useEffect(() => {
		getListUser();
	}, []);

	const getListUser = async () => {
		try {
			const response = await userApi.getList({
				// To do push to state
				page: 1,
				pageSize: 10,
			});
			if (response.meta[0].code !== API_STATUS.SUCCESS) {
				// show err, or do st
				return;
			}
			// set state
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="dashboard">
			<h1 className="text-xl text-center mb-2">React Hook Form</h1>
			<FormProvider {...methods}>
				<form
					className="section container mx-auto"
					onSubmit={methods.handleSubmit(onSubmit)}
				>
					<div className="container mx-auto">
						<div className="flex flex-col w-1/3 gap-2 mx-auto">
							<input
								{...methods.register("example", { required: "Example is required" })}
								placeholder="Example"
							/>
							{methods.formState.errors.example && (
								<p className="text-danger">{methods.formState.errors.example.message}</p>
							)}
							<input
								{...methods.register("exampleRequired", { required: "This is required" })}
								placeholder="Example Required"
							/>
							{methods.formState.errors.exampleRequired && (
								<p className="text-danger">
									{methods.formState.errors.exampleRequired.message}
								</p>
							)}
							<input
								{...methods.register("email", {
									required: "Email is required",
									pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								})}
								placeholder="Email"
							/>
							{methods.formState.errors.email && (
								<p className="text-danger">{methods.formState.errors.email.message}</p>
							)}
							<input
								{...methods.register("password", {
									required: "Password is required",
									minLength: 8,
								})}
								type="password"
								placeholder="Password"
							/>
							{methods.formState.errors.password && (
								<p className="text-danger">{methods.formState.errors.password.message}</p>
							)}
							<Button type="submit" className="mx-auto">
								Submit
							</Button>
							<OutlineButton className="mx-auto">Outline Btn</OutlineButton>
						</div>
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default Dashboard;
