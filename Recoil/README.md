# Recoil을 분석해보자 🎯

## 참고 주소

- [Recoil 공식 문서](https://recoiljs.org/ko/docs/introduction/motivation)
- [실습](https://recoiljs.org/ko/docs/introduction/getting-started/)

## 실습

- App.tsx: Recoil Root 적용
  - CharactorCount.tsx: Recoil 활용
    - TextInput.tsx: atom 적용
    - CharacterCount.tsx: selectors 적용

## 동기

- 컴포넌트 상태는 공통된 상위 요소까지 이동해야 공유 가능한 단점 극복
- Context는 여러 값의 집합을 담을 수 없는 단점 극복

## 설치 방법

```
yarn create vite
yarn add recoil
```

## 작동 과정

1. atoms(공유 상태)
2. selectors(순수 함수)
3. React Component

## Atoms

- 정의
  - 상태의 단위이며, 업데이트와 구독이 가능함
- 특징
  - 업데이트: 구독된 컴포넌트는 새로운 값 반영하여 다시 렌더링 진행
  - 상태 컴포넌트 간 공유 O
- 구조
  - key: 고유의 키 존재
  ```jsx
  const fontSizeState = atom({
    key: 'fontSizeState',
    default: 800,
  });
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  ```

## Selectors

- 정의
  - atoms나 다른 selectors를 입력으로 받아들이는 순수 함수
- 특징
  - 상위 업데이트: 하위 selector 재실행
  - 컴포넌트가 selectors 구독 O
  - selectors 변경시 컴포넌트 재렌더링
- 구조
  - key: 고유의 키 존재
  - get 속성: 계산될 함수
  - get 인자: atoms과 다른 selectors 접근
    ```jsx
    const fontSizeLabelState = selector({
      key: 'fontSizeLabelState',
      get: ({ get }) => {
        const fontSize = get(fontSizeState);
        const unit = 'px';
        return `${fontSize}${unit}`;
      },
    });
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);
    ```

## Atoms VS Selectors

- Atoms: 최소한의 상태 집합
- Selectors: Atoms을 제외한 모든 파생되는 데이터

즉, 최소한만 Atoms에 넣고, 나머지는 Selctors에 명시한 함수를 통해 계산하여 쓸모없는 상태의 보존을 방지한다.
