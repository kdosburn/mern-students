import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Grade from './models/grade';
import Student from './models/student';
import Report from './models/report';
import Average from './models/average';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3005;

mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
	res.json({ message: 'Hello world!' });
});	

router.get('/students', (req, res) => {
  Student.find((err, students) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: students });
  });
});

router.get('/grades', (req, res) => {
  Grade.find((err, grades) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: grades });
  });
});

router.get('/reports', (req, res) => {
  Report.find((err, reports) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: reports });
  }).sort('studentId');
});

router.get('/averages', (req, res) => {
  Average.find((err, average) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: average });
  }).sort('studentId');
});

// router.get('/testaverages', (req, res) => {
// 	Grade.aggregate($group:{_id: "Chapter 10 Test", avgQuantity: { $avg: "$Chapter 10 Test" }, (err, grades) => {
// 		if (err) return res.json({ success: false, error: err });
//     	return res.json({ success: true, data: grades });	
// 	});
// });

// router.get('/testaverages/:testId', (req, res) => {
// 	Grade.aggregate([
// 		{ $group: { _id: req.params.id, avgQuantity: { $avg: "$Chapter 10 Test"}}}	]).
// 	then(function (res) {
// 		console.log(res); // [ { maxBalance: 98000 } ]
//     	return res.json({ success: true, data: res });	
// 	});
// });

router.get('/testaverages/:id', (req, res) => {
	const testId = "Chapter " + req.params.id + " Test"; 
	const testIdAvg = "$" + testId;
	Grade.aggregate([
		{ $group: { _id: testId, avgQuantity: { $avg: testIdAvg }}}	]).
	then(function (res) {
		console.log(res); // [ { maxBalance: 98000 } ]
    	return res.json({ success: true, data: res });	
	});
});
	
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));