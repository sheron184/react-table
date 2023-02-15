import { useEffect } from "react"

const Table = ({rows}) =>{

	useEffect(()=>{
		console.log(rows[0])
	})
	return (
		<table>
			<thead>
				<tr>
			    	<th className="td">e_id</th>
			    	<th className="td">e_name</th>
			    	<th className="td salary">e_salary</th>
			    	<th className="td">e_age</th>
			    	<th className="td">e_gender</th>
			    	<th className="td">e_dept</th>
			  	</tr>
			</thead>
		  	<tbody>
			  {rows[0] && rows[0].map((row)=>(
                	<tr>
						<td className="td text-right">{row.e_id}</td>
						<td className="td text-left">{row.e_name}</td>
						<td className="td text-right salary">{row.e_salary}</td>
						<td className="td text-right">{row.e_age}</td>
						<td className="td text-left">{row.e_gender}</td>
						<td className="td">{row.e_dept}</td>
			  		</tr>
            	))}
			</tbody>
		</table>
	)
}

export default Table