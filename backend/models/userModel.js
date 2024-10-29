import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
  status: {
    type: Boolean,
    default: true,
  },
  vip_status: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("Users", userSchema);
export default User;
