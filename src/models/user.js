/*
 * @Author: wangwendie
 * @Date: 2023-07-04 13:45:04
 * @LastEditors: wangwendie
 * @Description:
 */

import mongoose from "mongoose";
;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  rank: Number,
  user_name: String,
  integral: Number,
  sing_in_list: Array,
  create_time: String,
  avatar: String,
  city: {
    name: String,
    longitude: String,
    latitude: String
  },
  wx_id: String
});

userSchema.index({ id: 1 });

const User = mongoose.model('User', userSchema);

// 在这里使用管道技术
// 准备准备学习

export default User;