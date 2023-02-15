import Table from "../components/Table"
import { useState } from "react"
import '../assets/css/table.css'

const Index = () => {
	const rows = useState([
		{
			e_id:'1',
			e_name:'Sam',
			e_salary:95000,
			e_age:45,
			e_gender:'Male',
			e_dept:'Operations'
		},
		{
			e_id:'2',
			e_name:'Bob',
			e_salary:80000,
			e_age:21,
			e_gender:'Male',
			e_dept:'Support'
		},
		{
			e_id:'3',
			e_name:'Anne',
			e_salary:125000,
			e_age:25,
			e_gender:'Female',
			e_dept:'Analytics'
		},
		{
			e_id:'4',
			e_name:'Julia',
			e_salary:73000,
			e_age:30,
			e_gender:'Female',
			e_dept:'Analytics'
		},
		{
			e_id:'5',
			e_name:'Matt',
			e_salary:159000,
			e_age:33,
			e_gender:'Male',
			e_dept:'Sales'
		},
		{
			e_id:'6',
			e_name:'Jeff',
			e_salary:112000,
			e_age:27,
			e_gender:'Male',
			e_dept:'Operations'
		},
	])

	return (
		<div className="container">
			<Table rows={rows} />
		</div>
	)
}

export default Index