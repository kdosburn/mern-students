import React, { Component } from 'react';
import GradeList from './GradeList';
import GradeForm from './GradeForm';
import DATA from './data';
import './GradeBox.css';

class GradeBox extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}
	render() {
		return (
			<div className="container">
				<div className="grades">
					<h2>Grades:</h2>
					<GradeList data={DATA} />
				</div>
				<div className="form">
					<GradeForm />
				</div>

			</div>

		);
	}
}

export default GradeBox;