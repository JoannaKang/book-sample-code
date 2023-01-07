// 식재료 스키마를 불러옵니다.
import { Ingredient } from "./Models/Ingredient.js";

// 새로운 식재료를 추가합니다.
const saveIngredient = async (req, res) => {
  console.log("🟠saveIngredient", req.body);
  // 클라이언트로부터 전달된 요청을 name, category, quantity, type이라는 변수에 할당합니다.
  const { name, category, quantity, type } = req.body;
  // (1) Ingredient스키마의 인스턴스를 생성합니다.
  const newMyFridgeItem = new Ingredient({
    name,
    category,
    quantity,
    type,
  });

  try {
    // (2) Ingredient 컬렉션에 새 도큐먼트를 추가합니다.
    const newItem = await Ingredient.create(newMyFridgeItem);
    res.status(201).send(newItem);
  } catch (error) {
    console.log("❌error", error);
    // (3) 데이터베이스 업데이트가 실패했을 경우 클라이언트로 응답할 내용을 정의합니다.
    res.status(500).json({ error: "새 아이템이 저장되지 않았습니다." });
  }
};

// 정의한 컨트롤러 함수를 파일 외부에서 사용할 수 있도록 내보내줍니다.
export { saveIngredient };
