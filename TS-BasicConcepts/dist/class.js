"use strict";
{
    class User {
        constructor(name) {
            this.familyName = 'kim';
            this.name = name;
            console.log(this.familyName);
        }
        changeFamilyName(newName) {
            this.familyName = newName;
        }
    }
    let user = new User('minjeong');
    console.log(user);
    user.changeFamilyName('lee');
    class StaticPosition {
        constructor() {
            this.y = 40;
        }
    }
    StaticPosition.x = 30;
    let staticSample = new StaticPosition();
    console.log(staticSample);
    console.log(StaticPosition.x);
    class Counter {
        constructor() {
            Counter.count++;
        }
        static getCount() {
            return Counter.count;
        }
        getId() {
            return Counter.count;
        }
    }
    Counter.count = 0;
    const counter = new Counter();
    console.log(counter.getId());
    console.log(Counter.getCount());
}
