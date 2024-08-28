# TypeScript 기본 문법을 분석해보자 🎯

## 환경 설정

- json 생성 및 설치

```
npm init -y //package.json 생성
npm i typescript //typescript 설치
npx tsc --init //tsconfig.json 생성
```

- 파일 및 폴더 설정

  - src: .ts 파일 생성
  - dist: .js 파일 자동으로 생성
  - package.json

  ```
  "type": "module",
  "scripts": {
      "build": "tsc",
      "start": "node dist/index.js",
      "dev": "tsc -w"
  },
  ```

- 파일 실행
  - src > dist로 자동 생성
  ```
  npm run dev
  ```
  - Javascript 실행 결과 확인
  ```
  nodemon dist/test.js
  ```

## 타입 선언 방법

- 직접 선언
- 타입 단언
  - <type>
  - as type
- type(타입 별칭)
- interface

## 타입 특성

### any VS unknown

- unknown
  - 할당을 당하는 경우: 어떤 자료형이든 OK
  - 할당을 하는 경우: any를 제외하고 NO!
- any
  - 할당을 당하는 경우: 어떤 자료형이든 OK
  - 할당을 하는 경우: never를 제외하고 OK

즉, any보다 unknown이 더 안전한 방식이다.

### never

함수 정상적 종료하지 않음을 명시적으로 나타내는 것이다.

- 값 반환 안하는 경우
- 도달할 수 없는 코드 경로를 명시하는 경우

```ts
function myFn2(): never {
  throw new Error('Error');
}
console.log(myFn2());
```

## 타입 문법 활용

### 타입가드

유니온(|), 인터섹션(&) 타입 등을 활용해 타입의 경우를 좁혀가는 것이다.

### 인덱스 시그니처(index signature)

객체의 key, value 타입을 정확하게 명시할 때 사용한다.

```ts
type test = {
  [key: string]: string;
};
```

### keyof

모든 키 값들을 유니온 타입(|)으로 연결한다.

```ts
type Point = { x: number; y: number };
type P = keyof Point; //'X' | 'Y'. 즉, key를 유니온으로 생성
```

### 튜플 타입(tuple type)

배열의 값의 타입과 길이를 고정한다.

```ts
let person: [string, number, boolean];
person = ['', 1, true];
```

### 매핑된 타입(mapped type)

제네릭을 활용해 기존의 타입을 바탕으로 새로운 타입을 만든다.

- 제네릭
  ```ts
  key in keyof test
  ```
- 새로운 타입 생성
  ```ts
  type mappedType = {
    a: boolean;
    b: boolean;
  };
  ```
- 전체 코드

```ts
type test = {
  a: string;
  b: string;
};

type mappedType = { [key in keyof test]: boolean };

let example: mappedType = {
  a: true,
  b: true,
};
```

### 제너릭(generic)

## 타입 기능 활용

### 타입을 내-외부에서 활용하는 방법

- export, import
  - export: 외부에서 사용 가능하도록 내보냄
  - import: export한 것을 내부에서 사용 가능하도록 불러옴
- global

  - export, import 필요X
  - 전역으로 내-외부에서 사용

- namespace
  - export, import 필요O
  - 지역적으로 내부에서 사용

### DOM에서 타입 활용하는 방법

- HTML 요소
- Event 요소
- null 또는 undefined를 방지
