import { useLocation } from "react-router-dom";

const useCurrentPath = () => {
  const location = useLocation();
  return <p>현재의 경로: {location.pathname}</p>;
};
export default useCurrentPath;
