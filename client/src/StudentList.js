import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {
	const studentNodes = props.data.map(student => (
		<Student firstName={student.firstName} lastName={student.lastName} key={student._id} id={student._id}>
			{student.firstName} {student.LastName}
		</Student>
	));
	return (
		<div> 
			{ studentNodes }
		</div>
	);
};

StudentList.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		firstName: PropTypes.string,
		lastName: PropTypes.string,
	})),
};

StudentList.defaultProps = {
	data: [],
};

export default StudentList;