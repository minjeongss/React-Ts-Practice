import { selector, useRecoilValue } from 'recoil';
import { textState } from './TextInput';

const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const ChracterCount = () => {
  const count = useRecoilValue(charCountState);
  return (
    <>
      <p>👀 Character Count:{count}</p>
    </>
  );
};
export default ChracterCount;
