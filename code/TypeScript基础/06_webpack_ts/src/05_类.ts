// 类可以理解为模板，通过模板可以实例化对象
// 面向对象的编程思想
(() => {
  // ts 中的类的定义和使用
  class Person {
    // 定义属性
    name: string;
    age: number;
    gender: string;
    // 定义构造函数：实例化对象对属性进行初始化
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

  const person = new Person("qzk", 20, "男");
  person.sayHi("你是？");
})();
