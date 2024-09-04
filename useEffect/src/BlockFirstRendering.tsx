import { useEffect, useRef, useState } from 'react';

const BlockFirstRendering: React.FC = () => {
  const isMounted = useRef<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    const alertClick = () => {
      alert(`Click이 ${clicked}로 변경되었습니다! 🚀`);
    };
    if (isMounted.current) {
      alertClick();
    } else {
      isMounted.current = true;
    }
    console.log('K');
  }, [clicked]);
  return (
    <>
      <button onClick={handleClick}>ON/OFF</button>
    </>
  );
};
export default BlockFirstRendering;
