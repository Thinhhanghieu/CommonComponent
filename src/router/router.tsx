import Dashboard from "../pages/dashboard/Dashboard";
import CSVReader from "../pages/import-form/CSVReader";
import MuiExample from "../pages/mui/MuiExample";

const routes = [
	{
		index: true,
		element: (
			<Dashboard/>
		),
		state: "dashboard",
	},
	{
		element: (
			<CSVReader/>
		),
		state: "csvReader",
		path: "csv-reader",
	},
	{
		element: (
			<MuiExample/>
		),
		state: "mui",
		path: "mui",
	},
];

export default routes;
