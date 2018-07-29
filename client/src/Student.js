import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Student = props => (
	<div className="singleStudent">
		single student
		<h3>{props.firstName} {props.lastName}</h3>
		<ReactMarkdown source={props.children} />
	</div>
);

Student.propTypes = {
	studentId: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
};

export default Student;