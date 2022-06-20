const mongoose = require("mongoose");
const { Schema } = mongoose;
/**
 * 테이블의 구조 - 컬럼(Document) 구성
 */
const User = new Schema(
  {
    userSq: { type: Number, required: true, unique: true },
    userId: { type: String, required: false, unique: false },
    userName: { type: String, required: false, unique: false },
  },
  { versionKey: false }
);

// 테이블(Collection) 생성
module.exports = mongoose.model("User", User);
