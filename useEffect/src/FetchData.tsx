import { useEffect, useState } from 'react';
interface Data {
  id: number;
  title: string;
}
const FetchData: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result: Data = await response.json();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Data Fetch</h1>
      {data ? (
        <div>
          <p>id: {data.id}</p>
          <p>title: {data.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default FetchData;
