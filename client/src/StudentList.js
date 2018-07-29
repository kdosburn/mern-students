import React from 'react';
import PropTypes from 'prop-types';
import Student from './Student';

const StudentList = (props) => {
	const studentNodes = props.data.map(student => (
		<Student firstName={student.FirstName} lastName={student.LastName} key={student.StudentID} id={student.StudentID}>
			testing {student.FirstName} {student.LastName}
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
		StudentID: PropTypes.string,
		FirstName: PropTypes.string,
		LastName: PropTypes.string,
	})),
};

StudentList.defaultProps = {
	data: [],
};

export default StudentList;