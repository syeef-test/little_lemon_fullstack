import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  priority: {
    type: Number,
    require: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const Employee = mongoose.model("Employess", employeeSchema);

export default Employee;
