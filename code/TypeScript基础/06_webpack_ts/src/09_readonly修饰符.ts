// 对类中的属性成员进行修饰，修饰后该属性成员就不能在外部被随意修改
(() => {
  class Person {
    readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi() {
      console.log(`${this.name}说你好`);
      // this.name = 'qzk123' //error ==> readonly 类中方法也不能修改
    }
  }

  const person = new Person("qzk");
  console.log(person.name);
  // person.name = "qzk123"; //error ==> readonly 只读不能修改
  // console.log(person.name);

  class Person1 {
    // 在构造器中使用readonly修饰，相当于定义了 readonly 修饰的属性参数
    // private public protected 也可以使用，并拥有对应的特性，都会添加自动的只读属性参数
    constructor(readonly name: string) {
      this.name = name;
    }
  }

  const person1 = new Person1("qzk");
  console.log(person1.name);
  // person1.name = "qzk123"; //error ==> readonly 只读不能修改
})();
