const mongoose = require("mongoose");
const express = require("express"); // Express 모듈을 가져옴
const app = express();

// Express Option : JSON 형태로 데이터 통신
app.use(express.json());

/**
 * MongoDB URL 지정
 * @formatting : mongodb://localhost/my_database'
 */
const MONGO_URL = `mongodb://localhost:27017`;
const MONGO_DB_NAME = "mongooseTestDB";

// Express Cofig
const EXPRESS_ROUTER_PORT = "3000";

/**
 * [STEP1] MongoDB Connection
 */
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: MONGO_DB_NAME,
  })
  .then(() => {
    console.log(`[+] mongoseDB Connection`);
  })
  .catch((err) => console.error(`[-] mongoseDB ERROR :: ${err}`));
/**
 * [STEP2] Express Route 구성
 */
app.listen(EXPRESS_ROUTER_PORT, () => {
  console.log(`Example app listening on port ${EXPRESS_ROUTER_PORT}`);
});

/**
 * [STEP3] Express Option으로 구성한 Router를 등록
 */
app.use("/", require("../routes/UserRoute"));
app.use("/", require("../routes/BoardRoute"));
