{
  //배열
  let list: number[] = [1, 2];
  let list2: Array<number> = [1, 2];
  console.log(list, list2);

  //유니온(union) 결합
  let id: (number | string)[] = [1, 2, 3]; //숫자 배열 또는 문자열 배열
  let id2: number | string[] = 1; //숫자 또는 문자열 배열
  console.log(id, id2);

  //매개변수
  //객체
  type Person = {
    student: string;
    age: number;
  };
  function printInfo({ student, age }: Person) {
    console.log(student, age);
  }
  printInfo({ student: 'kim', age: 10 });

  //배열
  type MyArray = [number, number];
  function MyFn([a, b]: MyArray) {
    console.log(a, b);
  }
  MyFn([50, 50]);

  //rest
  function add(...args: number[]) {
    args.map((elem) => console.log(elem));
  }
  add(1, 2, 3, 4);

  //narrowing(범위 줄이기)===타입가드
  //범위 확인
  //일반 값
  function print(x: number | string) {
    if (typeof x === 'number') {
    } else {
    }
  }
  print(1);
  //type
  type Fish = { swim: string };
  type Bird = { fly: string };
  function move(animal: Fish | Bird) {
    if ('swim' in animal) {
    } else {
    }
  }
  move({ swim: 'swim' });

  //class
  class Animal {
    makeSound() {
      console.log('소리 낸다!');
    }
  }
  class Dog extends Animal {
    bark() {
      console.log('소리 낸다!');
    }
  }
  class Cat extends Animal {
    meow() {
      console.log('소리 낸다!');
    }
  }
  function makeSound(anim: Animal) {
    if (anim instanceof Dog) {
      anim.bark();
    } else if (anim instanceof Cat) {
      anim.meow();
    } else {
      anim.makeSound();
    }
  }
  let dog = new Dog();
  makeSound(dog);

  //범위 설정
  let sample: any = 'HI';
  let length = (sample as string).length;
  console.log(length);
}
