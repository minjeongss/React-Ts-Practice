import { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => (prev.count += 1));
  };
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 업데이트되었습니다.");
    console.log("count 값이 변경되었습니다.");

    return () => {
      console.log("컴포넌트가 언마운트되었습니다.");
    };
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
    </div>
  );
};

export default FunctionComponent;
