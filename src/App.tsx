import { FormProvider, useForm, useFormContext } from "react-hook-form";
import "./App.scss";
import Button, { OutlineButton } from "./components/button/Button";

type Inputs = {
	example: string;
	exampleRequired: string;
};

export default function App() {
	const methods = useForm<Inputs>();
	const { errors } = methods.formState;
	console.log(errors);

	const onSubmit = (data: Inputs) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form className="section" onSubmit={methods.handleSubmit(onSubmit)}>
				<NestedInput />
				<Button type="submit">Submit</Button>
				<OutlineButton>Outline btn</OutlineButton>
				<p>12321312</p>
			</form>
		</FormProvider>
	);
}

function NestedInput() {
	const {
		register,
		formState: { errors },
	} = useFormContext<Inputs>(); // Retrieve all hook methods
	return (
		<>
			<input {...register("exampleRequired", { required: " This is req" })} />
			{errors.exampleRequired && <p>{errors.exampleRequired.message}</p>}
		</>
	);
}
