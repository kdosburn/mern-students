
// model/comment.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const ReportSchema = new Schema({
  studentId: String,
  firstName: String,
  lastName: String,
  chapter1Test: String,
  chapter2Test: String,
  chapter3Test: String,
  chapter4Test: String,
  chapter5Test: String,
  chapter6Test: String,
  chapter7Test: String,
  chapter8Test: String,
  chapter9Test: String,
  chapter10Test: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Report', ReportSchema);