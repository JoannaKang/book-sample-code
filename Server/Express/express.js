// express 패키지를 불러옵니다.
import express from "express";

// import cors from 'cors'

// express의 인스턴스를 생성합니다.
const app = express();
// 사용할 포트 번호를 할당합니다.
const PORT = 8000;
app.use(express.json());

// 1. 미들웨어 하나만 사용하는 경우
// app.get("/", (request, response, next) => {
//   console.log("get request!");
//   response.send("<h1>main page</h1>");
// });

// 2. 미들웨어 두 개 연결하는 경우
// app.get(
//   "/",
//   (request, response, next) => {
//     console.log("🟠get request!");
//     next();
//     // response.send("<h1>main page</h1>");
//   },
//   (request, response, next) => {
//     console.log("🟡get request2!");
//   }
// );

// 3. 미들웨어 오류가 발생한 경우
// app.get("/", (request, response, next) => {
//   console.log("🟢get request!");
//   throw Error("서버에 오류가 발생했습니다");
// });

app.post("/", (req, res) => {
  console.log("post request!", req);
  res.status(201).send("요청이 성공적으로 처리되었습니다.");
});

// 잘못된 경로로 접근 시 오류를 처리하는 미들웨어
app.use((req, res, next) => {
  res.status(404).send("요청하신 페이지가 존재하지 않습니다.");
});

// 서버 오류를 처리하는 미들웨어
app.use(function (err, req, res, next) {
  console.log("🔴", err);
  console.log("2");
  res.status(500).send(err.message);
});

// 할당한 포트 번호에서 서버를 실행합니다.
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트번호 ${PORT}에서 구동중입니다.`);
});
