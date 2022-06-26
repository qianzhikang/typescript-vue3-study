// 父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法，产生了不同的行为
(() => {
  // 父类
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    run(distance: number = 0) {
      console.log(`跑了${distance}米`);
    }
  }

  // 子类1
  class Dog extends Animal {
    run(distance: number = 10): void {
      console.log(`${this.name} 跑了 ${distance} 米`);
    }
  }
  // 子类2
  class Pig extends Animal {
    run(distance: number = 5): void {
      console.log(`${this.name} 跑了 ${distance} 米`);
    }
  }

  const dog: Animal = new Dog("修狗");
  dog.run();

  const pig: Animal = new Pig("修猪");
  pig.run();
})();
