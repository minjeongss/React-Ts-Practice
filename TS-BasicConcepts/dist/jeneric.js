"use strict";
{
    function test(a, b) {
        return { a, b };
    }
    test(1, 2);
    function test_generic(a, b) {
        return { a, b };
    }
    test_generic(1, 2);
    function test_generic_interface(a, b) {
        return { a, b };
    }
    test_generic_interface(1, 2);
    const kim = { name: 'kim', age: 20, isValid: true };
    const leon = ['Leon', 20, true];
    const min = ['Min', 20, true];
    console.log(kim, leon, min);
    class Basket {
        constructor(...rest) {
            this.items = rest;
        }
        putItem(item) {
            this.items.push(item);
        }
    }
    const fruitBasket = new Basket('Apple', 'Lemon');
    fruitBasket.putItem('Cherry');
    console.log(fruitBasket);
    const union = 123;
    console.log(union);
    const union2 = 123;
    console.log(union2);
    const user = true;
    console.log(user);
    const numbers = [1, 2, 3];
    const fruits = ['Apple', 'Lemon'];
    const hello = () => { };
    const test_numbers = 123;
    const test_fruits = 'fruit';
    const test_hello = null;
    console.log(test_numbers, test_fruits, test_hello);
    function twoArgument(a, b) {
        console.log(a, b);
    }
    const test_twoArgument = 123;
    const test_number = null;
    console.log(test_twoArgument, test_number);
    function add(x, y) {
        return x + y;
    }
    const test_add = 'hello';
    console.log(test_add);
}
