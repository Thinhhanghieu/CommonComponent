import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Papa from "papaparse";
import Button from "../../components/button/Button";
import "./csvreader.scss";
type FormData = {
	[key: string]: any;
};

const CSVReader: React.FC = () => {
	const { register, control, handleSubmit, setValue } = useForm<FormData>();
	const [data, setData] = useState<FormData[]>([]);

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			Papa.parse(file, {
				header: true,
				complete: (results) => {
          console.log(results);
          
					setData(results.data as FormData[]);
					// Tự động điền form nếu có dữ liệu
					if (results.data.length > 0) {
						const firstRow = results.data[0] as FormData;
						Object.keys(firstRow).forEach((key) => {
							setValue(key, firstRow[key]);
						});
					}
				},
			});
		}
	};

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<div className="csv-reader">
			<input type="file" accept=".csv" onChange={handleFileUpload} />
			<form onSubmit={handleSubmit(onSubmit)} className="csv-reader__form">
				{data.length > 0 &&
					Object.keys(data[0]).map((key, index) => (
						<div key={index}>
							{" "}
							<label>{key}</label>{" "}
							<input {...register(key)} defaultValue={data[0][key] || ""} />{" "}
						</div>
					))}

				<Button className="csv-reader__form-item" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default CSVReader;
