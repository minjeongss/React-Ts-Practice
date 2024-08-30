import { atom, useRecoilState } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <input
        style={{ width: '50%', height: '30px', borderRadius: '5px', padding: '5px' }}
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <p>🚀 Echo Text: {text} </p>
    </div>
  );
};

export default TextInput;
