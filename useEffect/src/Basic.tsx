import { useEffect, useState } from 'react';

const Basic: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  //기본
  useEffect(() => {
    alert('Component has been rendered or updated');
  });

  //의존성
  useEffect(() => {
    alert('Count Changed!');
  }, [count]);

  //의존성 최적화
  useEffect(() => {
    alert('Count or Text Changed!');
  }, [count, text]);

  return (
    <div>
      <p>
        Count:{count}, Text:{text}
      </p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};
export default Basic;
