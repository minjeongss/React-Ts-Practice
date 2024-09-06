import { Outlet } from "react-router-dom";

const ProductPage = () => {
  return (
    <main>
      <h2>프로덕트 페이지</h2>
      <Outlet />
    </main>
  );
};

export default ProductPage;
