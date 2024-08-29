{
  //접근 제한자
  //public, private, protected
  //static

  //private
  class User {
    name: string;
    private familyName: string = 'kim';
    constructor(name: string) {
      this.name = name;
      console.log(this.familyName);
    }
    public changeFamilyName(newName: string) {
      this.familyName = newName;
    }
  }
  let user = new User('minjeong');
  console.log(user);
  //   console.log(user.familyName); 접근 불가능
  user.changeFamilyName('lee');

  //static
  class StaticPosition {
    static x = 30; //출력 결과에 안보임
    y = 40;
  }
  let staticSample = new StaticPosition();
  console.log(staticSample); //인스턴스에서 static값 확인 불가능
  //   console.log(staticSample.x); 인스턴스에서 static 호출 불가능
  console.log(StaticPosition.x); //class내 접근은 가능

  //private+static
  class Counter {
    private static count = 0;
    constructor() {
      Counter.count++; //static은 this 사용 불가능
    }
    public static getCount(): number {
      return Counter.count;
    }
    public getId(): number {
      return Counter.count;
    }
  }
  const counter = new Counter();
  console.log(counter.getId());
  //   console.log(counter.getCount()); static이 붙어서 인스턴스에서 접근 불가능
  console.log(Counter.getCount()); //가능
}
