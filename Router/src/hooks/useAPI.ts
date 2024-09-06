import { useEffect, useState } from "react";

const useAPI = ({ id }: { id: string }) => {
  const [data, setData] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(JSON.stringify(data));
    };
    fetchData();
    return () => {
      console.log("제거!");
    };
  }, [id]);
  return data;
};
export default useAPI;

//1: 생성: return 그리기=render
//2: component did mount=useEffect
//  2-2: 이때, setData도 진행
//  2-2: render
//  2-3: component did update
//3: component unmount: 컴포넌트 제거할 때 useEffect return
