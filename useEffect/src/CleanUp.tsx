import { useEffect, useState } from 'react';

const CleanUp: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      alert('Timer cleared!');
    };
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
export default CleanUp;
