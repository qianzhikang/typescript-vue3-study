// 修饰符 private public protected
// 默认public 任何位置都可以访问类中的成员
(() => {
  class Person {
    // public name: string;
    // private name: string;
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    eat() {
      console.log("吃饭", this.name);
    }
  }

  const per = new Person("qzk");
  // console.log(per.name) //private修饰无法直接访问

  class Student extends Person {
    eat(): void {
      // 子类中可以访问 protected修饰的属性
      console.log(this.name);
    }
  }
})();
