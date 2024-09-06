import { useNavigate } from "react-router-dom";

const NavigateButton = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>About으로 이동</button>;
};
export default NavigateButton;
