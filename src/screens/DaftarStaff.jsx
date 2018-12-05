import React from 'react';
import { DaftarStaffRow } from '../components/DaftarStaffRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment'

export class DaftarStaff extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStaff: []
		}
		Appointment.getAllStaff().then(response => {
		 	this.setState({
			 		loading : false,
			 		listStaff : response.result
		 		});
	 	});
	}

	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staff" header={['Nama Staff']}>
                    <DaftarStaffRow listStaff={this.state.listStaff}/>
                </TableContainer>
            )
        }
	}
}