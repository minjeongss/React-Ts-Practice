import { useEffect, useState } from "react";

interface DataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const UseEffectComponent = () => {
  const [userInfo, setUserInfo] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        if (error instanceof Error) setError(error);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return <p>UserId: {userInfo?.userId}</p>;
};

export default UseEffectComponent;
