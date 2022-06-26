// 类类型
(() => {
  interface IFly {
    fly(): void;
  }
  class Person implements IFly {
    fly(): void {
      console.log("i can fly");
    }
  }

  interface ISwim {
    swim(): void;
  }
  // 多实现
  class Person2 implements IFly, ISwim {
    fly(): void {
      console.log("i can fly");
    }
    swim(): void {
      console.log("i can swim");
    }
  }

  // 定义一个接口继承其他多个接口
  interface IFlyAndSwim extends IFly, ISwim {}
  class Person3 implements IFlyAndSwim {
    fly(): void {
      console.log("i can fly");
    }
    swim(): void {
      console.log("i can swim");
    }
  }
})();
