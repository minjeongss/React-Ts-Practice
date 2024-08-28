{
  //일반함수
  function add(a: number, b: number): number {
    return a + b;
  }
  add(1, 2);

  //화살표 함수
  type addType2 = (a: number, b: number) => number;
  let add2: addType2 = (a, b) => a + b;
  add2(1, 2);

  //함수 타입 리터럴
  type addType3 = { (a: number, b: number): number };
  let add3: addType3 = (a, b) => a + b;
  add3(1, 2);

  //인터페이스
  interface addType4 {
    (a: number, b: number): number;
  }
  let add4: addType4 = (a, b) => a + b;
  add4(1, 2);
}
