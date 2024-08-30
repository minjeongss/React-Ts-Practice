import { RecoilRoot } from 'recoil';
import './styles/App.css';
import ChracterCounter from './components/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      <ChracterCounter />
    </RecoilRoot>
  );
}

export default App;
