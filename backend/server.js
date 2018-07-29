import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Grade from './models/grade';
import Student from './models/student';

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

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));