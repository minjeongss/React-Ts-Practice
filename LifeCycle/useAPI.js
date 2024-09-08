import { useEffect, useState } from "react";

const useAPI = ({ id }) => {
  const [data, setData] = useState < string > "";
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
