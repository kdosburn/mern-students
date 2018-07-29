// data.js
const studentData = [
  { _id: 101, firstName: 'Bobby', lastName: 'Jenkins' },
  { _id: 102, firstName: 'Ace', lastName: 'Jabber' },
  { _id: 103, firstName: 'Ady', lastName: 'Jamble' },
];

const gradesData = [
  { _id: 101, firstName: 'Bobby', lastName: 'Jenkins' },
  { _id: 102, firstName: 'Ace', lastName: 'Jabber' },
  { _id: 103, firstName: 'Ady', lastName: 'Jamble' },
];

const studentData = [
  { _id: 101, firstName: 'Bobby', lastName: 'Jenkins', assignments: {
  	assignment1: 89,
  	assignment2: 99,
  	assignment3: 77,
  }},
  { _id: 102, firstName: 'Ace', lastName: 'Jabber', 
  	assignment1: 88,
  	assignment2: 66,
  	assignment3: 77,
  },
  { _id: 103, firstName: 'Ady', lastName: 'Jamble' },
];



const grades = {
	assignment1: {
		[101, 99],
		[102, 88],
	}
}




export default data;