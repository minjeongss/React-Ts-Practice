# useContext를 분석해보자 🎯

## 참고주소

- [useContext](https://ko.react.dev/reference/react/useContext#usecontext)
- [typescript에서 useContext 사용법](https://ko.react.dev/learn/typescript#typing-usecontext)

## 정의

컴포넌트를 통해 props를 저달할 필요 없이 컴포넌트 트리를 따라 데이터를 전달하는 기술이다. 이를 통해 Props Driling을 방지한다.

Provider 컴포넌트를 생성할 때 사용되며, 자식 컴포넌트에서 값을 소비하는 Hook을 생성할 때 사용된다.

context에서 제공한 값의 타입은 createContext 호출에 전달된 값에서 추론된다.

## 사용법

1. 선언

```ts
type Theme = 'light' | 'dark' | 'system';
export const ThemeContext = createContext<Theme>('system');
```

2. 전달(Provider 컴포넌트 생성)

```ts
return (
  <ThemeContext.Provider value={theme}>
    <UseTheme />
  </ThemeContext.Provider>
);
```

3. 사용(자식 컴포넌트에서 값 소비)

```ts
const theme = useContext(ThemeContext);
```

4.  업데이트

- 선언

```ts
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}
export const ThemeContext = createContext<ThemeContextType>({ theme: 'light', setTheme: () => {} });
```

- 루트 컴포넌트에서 Provider에서 전달

```ts
<ThemeContext.Provider value={{ theme, setTheme }}>
  <Button />
  <UseTheme />
</ThemeContext.Provider>
```

- 소비하는 컴포넌트에서 값 업데이트

```ts
export default function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      }}
    >
      Change the Theme!!
    </button>
  );
}
```

5.  context 오버로딩

```ts
<ThemeContext.Provider value={{ theme, setTheme }}>
  <Button />
  <UseTheme />
  <ThemeContext.Provider value={{ theme: 'dark', setTheme }}>
    <DarkUseTheme />
  </ThemeContext.Provider>
</ThemeContext.Provider>
```

## 실습: App.tsx+UseTheme.tsx

- 부모: App.tsx
- 자식: UseTheme.tsx
