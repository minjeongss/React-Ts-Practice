{
  //함수
  //함수에 바로 적용
  interface Calculate_simple {
    (a: number, b: number): number;
  }
  let add_test2: Calculate_simple = (a, b) => a + b;
  console.log(add_test2(1, 2));

  //여러 함수 중 하나에 적용
  //관련된 여러 함수나 속성을 그룹화한 부분
  interface Calculate {
    add: (a: number, b: number) => number;
  }
  let add_test: Calculate = {
    add: (a, b) => a + b,
  };
  console.log(add_test.add(1, 2));
}
