const express = require("express");
const Board = require("../models/BoardModel");
const routers = express.Router();

/**
 * BOARD Select ALL
 */
routers.get("/board", (req, res, next) => {
  Board.find((err, result) => {
    console.log(result);
    res.json(result);
  });
});

routers.post("/board", (req, res, next) => {
  const BoardValues = new Board({
    boardSq: 1,
    boardTitle: "Node.js 시작!",
    boardContent: "반갑습니다~",
  });
  BoardValues.save()
    .then((res) => console.log("테이블에 컬럼까지 만들기 완료"))
    .catch((err) => console.error("테이블 데이터 넣기 실패"));
});

module.exports = routers;
