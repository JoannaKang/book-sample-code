const getMyFridgeList = (req, res) => {
  console.log("🔴getMyFridgeList");
  res.send("<h1>In my fridge list</h1>");
};

const saveMyFridgeList = (req, res) => {
  console.log("🟠saveMyFridgeList", req.body);
  res.status(201).send("요청이 성공적으로 처리되었습니다.");
};

export { getMyFridgeList, saveMyFridgeList };
