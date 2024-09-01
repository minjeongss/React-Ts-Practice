{
  //1 함수 오버로딩
  function test(
    a: string | number,
    b: string | number,
  ): { a: string | number; b: string | number } {
    return { a, b };
  }
  test(1, 2);

  //2 제네릭
  function test_generic<T>(a: T, b: T): { a: T; b: T } {
    return { a, b };
  }
  test_generic(1, 2);

  //3 제네릭 인터페이스 단일 적용
  interface TestGeneric<T> {
    a: T;
    b: T;
  }
  function test_generic_interface<T>(a: T, b: T): TestGeneric<T> {
    return { a, b };
  }
  test_generic_interface(1, 2);

  //4 제네릭 인터페이스 다양하게 적용
  type User<T, U, V> =
    | {
        name: T;
        age: U;
        isValid: V;
      }
    | [T, U, V];
  type User_Simple = User<string, number, boolean>;
  const kim: User<string, number, boolean> = { name: 'kim', age: 20, isValid: true };
  const leon: User<string, number, boolean> = ['Leon', 20, true];
  const min: User_Simple = ['Min', 20, true];
  console.log(kim, leon, min);

  //5 제너릭 클래스 적용
  class Basket<T extends string> {
    public items: T[];
    constructor(...rest: T[]) {
      this.items = rest;
    }
    putItem(item: T) {
      this.items.push(item);
    }
  }
  const fruitBasket = new Basket<string>('Apple', 'Lemon');
  fruitBasket.putItem('Cherry');
  console.log(fruitBasket);

  //T extneds string에 의하여 에러 발생!
  //   const moneyBasket = new Basket<number>(100, 100);
  //   console.log(moneyBasket);

  //6 제너릭 유틸리티(Utility) 타입
  type MyExclude<T, U> = T extends U ? never : T;
  type MyUnion = string | number | boolean | null;
  const union: MyExclude<MyUnion, boolean | null> = 123; //string|number
  console.log(union);

  //7 제너릭 내장 유틸리티 타입
  const union2: Exclude<MyUnion, boolean | null> = 123; //string|number
  console.log(union2);

  //8 제네릭 조건부 타입
  type isPropertyType<T, U extends keyof T, V> = T[U] extends V ? true : false;
  interface User2 {
    name: string;
    age: number;
  }
  const user: isPropertyType<User2, 'name', string> = true;
  console.log(user);

  //9 제네릭 infer(타입 추론)
  //-배열 여부 확인
  type ArrayItemType<T> = T extends (infer I)[] ? I : null;
  const numbers = [1, 2, 3];
  const fruits = ['Apple', 'Lemon'];
  const hello = () => {};
  const test_numbers: ArrayItemType<typeof numbers> = 123;
  const test_fruits: ArrayItemType<typeof fruits> = 'fruit';
  const test_hello: ArrayItemType<typeof hello> = null;
  console.log(test_numbers, test_fruits, test_hello);

  //-두 번째 인자 반환
  type SecondArgumentType<T> = T extends (f: any, s: infer S) => any ? S : null;
  function twoArgument(a: string, b: number) {
    console.log(a, b);
  }
  const test_twoArgument: SecondArgumentType<typeof twoArgument> = 123;
  const test_number: SecondArgumentType<number> = null;
  console.log(test_twoArgument, test_number);

  //-함수 반환 타입 확인
  type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R
    ? R
    : any;
  function add(x: string, y: string) {
    return x + y;
  }
  const test_add: MyReturnType<typeof add> = 'hello';
  console.log(test_add);
}
