# TanStack Query(react-query)을 분석해보자 🎯

## 참고 주소

- [TanStack Qeury 공식문서](https://tanstack.com/query/latest/docs/framework/react/guides/queries)
- [Redux가 아닌 TanStack Qeury를 선택한 이유](https://tech.kakaopay.com/post/react-query-1/)

## TanStack Qeury란 무엇인가

리액트 애플리케이션에서 서버 상태를 불러오고, 캐싱하고, 업데이트하는 작업을 용이하게 해주는 라이브러리이다.

클라이언트 상태 관리에 특화된 기존 상태 라이브러리(Redux 등)와 달리, 서버 상태 관리에 특화되었다.

## TanStack Query 사용법

- 설치

  - TanStack Qeury

  ```
  yarn add @tanstack/react-query
  ```

  - Devtools

  ```
  yarn add @tanstack/react-query-devtools
  ```

- 환경 설정

  - QeuryClientProvider
  - QueryClient
  - ReactQueryDevtools

    ```ts
    const queryClient = new QueryClient();

    function App() {
      return (
        <>
          <QueryClientProvider client={queryClient}>
            // 실제 컴포넌트
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </>
      );
    }
    ```

- 컴포넌트 설정

  - useQuery: READ
  - useMutation: CREATE, UPDATE, DELETE

  - staleTime: 데이터 새로고침하지 않는 시간
  - cacheTime: 데이터가 캐시에 유지되는 시간

## TanStack Query 없이 비동기 데이터 관리하는 방법

useEffect, useState를 사용하여 관리를 진행합니다.

```ts
const UseEffectComponent = () => {
  const [userInfo, setUserInfo] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        if (error instanceof Error) setError(error);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return <p>UserId: {userInfo?.userId}</p>;
};
```

## TanStack Qeury로 비동기 데이터 관리하는 방법

1. QueryClientProvider로 감싸기

```ts
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TanStackQeuryComponent />
      </QueryClientProvider>
    </>
  );
}
```

2. useQuery로 READ 진행하기

```ts
const TanStackQeuryComponent = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error("Fail Fetch!");
      }
      return response.json();
    },
  });
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return <p>{data.id}</p>;
};
```
