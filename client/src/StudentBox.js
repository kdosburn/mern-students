import React, { Component } from 'react';
import StudentList from './StudentList';
import DATA from './data';
import './StudentBox.css';

class StudentBox extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}
	render() {
		return (
			<div className="container">
				<div className="students">
					<h2> STUDENTS: </h2>
					<StudentList data={DATA} />
				</div>
			</div>
		);
	}

}

export default StudentBox;