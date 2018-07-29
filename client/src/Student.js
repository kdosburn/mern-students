import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Student = props => (
	<div className="singleStudent">
		<h3>{props.firstName}</h3>
		<ReactMarkdown source={props.children} />
	</div>
);

Student.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
};

export default Student;