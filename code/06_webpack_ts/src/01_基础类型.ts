//基础类型
(() => {
  //布尔类型，基本语法
  // let 变量名：数据类型 = 值
  let flag: boolean = true;
  console.log(flag);

  // 数字类型
  let a1: number = 10; // 十进制
  let a2: number = 0b1010; // 二进制
  let a3: number = 0o12; // 八进制
  let a4: number = 0xa; // 十六进制
  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);

  //字符串类型
  let name: string = "tom";
  name = "jack";
  // name = 12 // error
  let age: number = 12;
  const info = `My name is ${name}, I am ${age} years old!`;
  console.log(info);

  console.log("--------------------------------------");

  // undefined 和 null
  let und: undefined = undefined;
  let nll: null = null;
  console.log(und);
  console.log(nll);

  console.log("--------------------------------------");
  // 数组类型
  // 数组定义方式1：
  let arr1: number[] = [10, 20, 30, 40, 50];
  // 数组定义方式2
  let arr2: Array<number> = [100, 200, 300];

  // 元祖类型
  let t1: [string, number];
  t1 = ["hello", 10]; // OK
  // t1 = [10, "hello"]; // Error

  console.log("--------------------------------------");

  // 枚举类型
  enum Color {
    red,
    green,
    blue,
  }
  // 枚举数值默认从0开始依次递增
  // 根据特定的名称得到对应的枚举数值
  let myColor: Color = Color.green; // 0
  console.log(myColor, Color.red, Color.blue);

  // 手动编号
  // enum Color {
  //   Red = 1,
  //   Green,
  //   Blue = 9,
  // }
  // let c: Color = Color.Green; // 2
  // let c: Color = Color.Blue; // 9

  //根据编号获取值
  console.log(Color[2]); // blue

  console.log("--------------------------------------");

  // any类型
  let str: any = 100;
  str = "hello world!";
  console.log(str);
  // 当一个数组中要存储多个数据，个数不确定，类型不确定此时可以使用any类型定义数组
  let arr: any[] = [100, "hello", true];
  console.log(arr);

  console.log("--------------------------------------");
  //void 类型
  /* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
  function fn(): void {
    console.log("fn()");
    // return undefined
    // return null
    // return 1 // error
  }
  console.log(fn()); //undefined

  // 可以赋值 null 或 undefined
  let unusable: void = undefined; // null 也可以

  console.log("--------------------------------------");
  // object 类型
  // 定义一个函数，参数是object类型，返回值也是object类型
  function getObj(obj: object): object {
    console.log(obj);
    return {
      name: "qzk",
      age: 22,
    };
  }
  console.log(getObj({ name: "ts", age: 20 }));

  console.log("--------------------------------------");
  // 联合类型 Union Types 表示取值可以为多种类型中的一种
  function getString(str: number | string): string {
    return str.toString();
  }
  console.log(getString("123"));
  console.log(getString(123));

  // 类型断言
  // 传入一个number或string 返回他的长度
  // 类型断言，告诉编辑器 str的类型
  // 方式1 ： <类型>值
  function getStrLength(str: number | string): number {
    if ((<string>str).length) {
      // 方式2： 值 as 类型
      return (str as string).length;
    } else {
      return str.toString.length;
    }
  }

  // 类型推断:没有明确的指定类型的时候推测出一个类型
  let text; // 没有赋值时any类型
  text = 123;
  text = "hello";

  let num = 100; // number 类型
  // num = 'hello'  // error
  let st = "hello";
  // st = 100 //error
})();
