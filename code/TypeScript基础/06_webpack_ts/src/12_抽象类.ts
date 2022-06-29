(() => {
  // 抽象类
  abstract class Animal {
    // 抽象方法
    abstract eat(): void;
    // 实例方法
    sayHi() {
      console.log("hi");
    }
  }

  class Dog extends Animal {
    eat(): void {
      console.log("小狗吃饭");
    }
  }

  const dog: Dog = new Dog();
  dog.eat();
  dog.sayHi();
})();
