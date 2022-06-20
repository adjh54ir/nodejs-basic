const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * 테이블의 구조 - 컬럼(Document) 구성
 */
const Board = new Schema({
  boardSq: { type: Number, required: true, unique: true },
  boardTitle: { type: String, required: false, unique: false },
  boardContent: { type: String, required: false, unique: false },
});
// Create Model & Export
module.exports = mongoose.model("Borad", Board);
