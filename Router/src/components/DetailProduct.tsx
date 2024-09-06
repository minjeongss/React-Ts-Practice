import { useSearchParams } from "react-router-dom";

const DetailProduct = () => {
  const [selectParams, setSelectParams] = useSearchParams();
  const id = selectParams.get("id");
  const setParams = () => {
    setSelectParams({ id: "1" });
  };
  return (
    <div>
      <p>물품의 id: {id}</p>
      <button onClick={setParams}>물품 id 설정</button>
    </div>
  );
};

export default DetailProduct;
