# Router를 분석해보자 🎯

## 참고 주소

- [useSearchParams](https://velog.io/@rayong/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-%EC%BF%BC%EB%A6%AC-%EC%8A%A4%ED%8A%B8%EB%A7%81-useSearchParams)
- [JSON 활용](https://jsonplaceholder.typicode.com/)

## 설치

- 기초 환경 설정

```
yarn create vite
yarn
yarn dev
```

- React Router 설치

```
yarn add react-router-dom
```

## 라우터 설정

### 0. 요소

#### 환경 설정

- BrowserRouter
- Routes, Route
- Outlet

#### 이동

- Link
- useNavigate

#### 위치 확인

- useLocation
- useParams
- useSearchParams

### 1. 환경 설정

#### BrowserRouter

> main.tsx

```tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

#### Routes, Route

> App.tsx

```tsx
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}
```

#### Outlet

> App.tsx, ProductPage.tsx, DetailProduct.tsx

- 중첩된 라우터 설정

```tsx
function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<ProductPage />}>
          <Route path="" element={<DetailProduct />} />
        </Route>
      </Routes>
    </>
  );
}
const ProductPage = () => {
  return (
    <main>
      <h2>프로덕트 페이지</h2>
      <Outlet />
    </main>
  );
};
```

### 2. 이동

#### Link

> Header.jsx

```tsx
const Header = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </nav>
  );
};
```

#### useNavigate

> NavigateButton.tsx

```tsx
const NavigateButton = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/about")}>About으로 이동</button>;
};
```

### 3. 위치 확인

#### useLocation

> CurrentPath.tsx

```tsx
const CurrentPath = () => {
  const location = useLocation();
  return <p>현재 경로: {location.pathname}</p>;
};
```

#### useParams

> Userpage.tsx

- user 뒤에 숫자에 해당하는 요소를 id에 할당

```
http://localhost:5173/user/1
```

```tsx
const UserPage = () => {
  const { id } = useParams() as { id: string };
  const user = useAPI({ id });

  return (
    <main>
      <h2>유저 페이지</h2>
      <p>{user}입니다</p>
      <p>{id}입니다</p>
    </main>
  );
};
```

#### useSearchParams

> DetailProduct.tsx

- 기본

```
http://localhost:5173/product
```

- Searchparams set 진행
  - ? 뒤에 id가 key인 쿼리 스트링을 찾아 변수 id에 할당

```
http://localhost:5173/product?id=1
```

```tsx
const DetailProduct = () => {
  const [selectParams, setSelectParams] = useSearchParams();
  const id = selectParams.get("id");
  const setParams = () => {
    setSelectParams({ id: "1" });
  };
  return (
    <div>
      <p>물품의 id: {id}</p>
      <button onClick={setParams}>물품 id 설정</button>
    </div>
  );
};
```
