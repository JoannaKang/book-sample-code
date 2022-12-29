import express from "express";
// 외부 파일에 정의된 미들웨어 함수를 불러옵니다.
import { getMyFridgeList, saveMyFridgeList } from "./controller.js";

// 라우터의 인스턴스를 생성해줍니다.
const router = express.Router();

// 방법 1 : 라우터에 HTTP 요청을 처리하기 위한 미들웨어를 바로 연결
// router.get("/inMyFridge", (req, res) => {
//   console.log("🔴getMyFridgeList");
//   res.send("<h1>In My Fridge list</h1>");
// });
// router.post("/inMyFridge", (req, res) => {
//   console.log("🟠saveMyFridgeList", req.body);
//   res.status(201).send("요청이 성공적으로 처리되었습니다.");
// });

// 방법 2 : 미들웨어를 controller 파일로 분리
// router.get("/inMyFridge", getMyFridgeList);
// router.post("/inMyFridge", saveMyFridgeList);

// 방법 3 : 한 라우팅 URL에 여러 HTTP 요청을 체이닝 하는 방법
// router.route("/inMyFridge").get(getMyFridgeList).post(saveMyFridgeList);

export default router;
