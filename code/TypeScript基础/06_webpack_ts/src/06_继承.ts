// 继承：类与类之间的关系
(() => {
  class Person {
    // 定义属性
    name: string;
    age: number;
    gender: string;
    // 构造器
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    // 定义实例方法
    sayHi(str: string) {
      console.log(
        str,
        `name:${this.name}  age:${this.age}  gender:${this.gender}`
      );
    }
  }

  class Student extends Person {
    // 已经拥有父类的属性、构造器、函数，可之间调用
    // 也可以定义自己的属性、构造器、函数
  }
  const student = new Student("qzk123", 20, "男");
  student.sayHi("自我介绍");
})();
