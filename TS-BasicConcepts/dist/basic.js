"use strict";
{
    let list = [1, 2];
    let list2 = [1, 2];
    console.log(list, list2);
    let id = [1, 2, 3];
    let id2 = 1;
    console.log(id, id2);
    function restTest(a, b, ...rest) {
        console.log('Rest Test1: ', a, b, rest);
    }
    function restTest2(...rest) {
        console.log('Rest Test2: ', rest);
    }
    function restTest3(...rest) {
        console.log('Rest Test3: ', rest);
    }
    restTest('test', 1, 2, 3);
    restTest2('test', 1, 2, 3);
    restTest3('test', 1, 2, 3);
    function printInfo({ student, age }) {
        console.log(student, age);
    }
    printInfo({ student: 'kim', age: 10 });
    function MyFn([a, b]) {
        console.log(a, b);
    }
    MyFn([50, 50]);
    function add(...args) {
        args.map((elem) => console.log(elem));
    }
    add(1, 2, 3, 4);
    function print(x) {
        if (typeof x === 'number') {
        }
        else {
        }
    }
    print(1);
    function move(animal) {
        if ('swim' in animal) {
        }
        else {
        }
    }
    move({ swim: 'swim' });
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
    function makeSound(anim) {
        if (anim instanceof Dog) {
            anim.bark();
        }
        else if (anim instanceof Cat) {
            anim.meow();
        }
        else {
            anim.makeSound();
        }
    }
    let dog = new Dog();
    makeSound(dog);
    let sample = 'HI';
    let length = sample.length;
    console.log(length);
}
