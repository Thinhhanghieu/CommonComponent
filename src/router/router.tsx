import Dashboard from "../pages/dashboard/Dashboard";
import CSVReader from "../pages/import-form/CSVReader";

const routes = [
	{
		index: true,
		element: (
			<Dashboard/>
		),
		state: "dashboard",
		path: "dashboard",
	},
	{
		element: (
			<CSVReader/>
		),
		state: "csvReader",
		path: "csv-reader",
	},
];

export default routes;
