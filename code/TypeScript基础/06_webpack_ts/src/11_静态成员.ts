//  在类中使用static修饰的属性或方法:静态成员
// 静态成员在使用的时候使用类名.成员的方式使用
(() => {
  class Person {
    // 类中自带了 name 这个静态成员 所以换名字为name1
    static name1: string;
    // constructor(name: string) {
    // this.name1 = name;
    // }
    static sayHi() {
      console.log("hi");
    }
  }

  const person: Person = new Person();
  // console.log(person.name1); //error 不能通过对象访问静态属性成员
  // person.sayHi(); //error 不能通过对象访问静态属性成员
  console.log(Person.name1);
  Person.sayHi();
})();
