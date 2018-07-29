import React from 'react';
import PropTypes from 'prop-types';
import Grade from './Grade';

const GradeList = (props) => {
	const gradeNodes = props.data.map(grade => (
		<Grade grade={grade.id}>
			{ grade.id } 
		</Grade>
	));
	return (
		<div>
			{ gradeNodes }
		</div>
	);
};


GradeList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string;
		name: PropTypes.string;
		grade: PropTypes.string;
	}))
};

GradeList.defaultProps = {
	data: [];
};

export default GradeList;