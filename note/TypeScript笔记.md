# TypeScript笔记

## 初识 TypeScript

![TypeScript](https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202206201122935.png)

### TypeScript 的介绍

TypeScript是一种由微软开发的开源、跨平台的编程语言。它是JavaScript的超集，最终会被编译为JavaScript代码。

2012年10月，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版TypeScript

TypeScript的作者是安德斯·海尔斯伯格，C#的首席架构师。它是开源和跨平台的编程语言。

TypeScript扩展了JavaScript的语法，所以任何现有的JavaScript程序可以运行在TypeScript环境中。

TypeScript是为大型应用的开发而设计，并且可以编译为JavaScript。

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6+ 的支持**，它由 Microsoft 开发，代码开源于 GitHub 上

**TypeScript 是 JavaScript 的一个超集**，主要提供了**类型系统**和**对 ES6+ 的支持**，它由 Microsoft 开发，代码[开源于 GitHub (opens new window)](https://github.com/Microsoft/TypeScript)上

### TypeScript 的特点

TypeScript 主要有 3 大特点：

- **始于JavaScript，归于JavaScript**

TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的JavaScript 引擎中。

- **强大的类型系统**

**类型系统**允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。

- **先进的 JavaScript**

TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。

### 安装TypeScript

命令行运行如下命令，全局安装 TypeScript：

```sh
npm install -g typescript
```

安装完成后，在控制台运行如下命令，检查安装是否成功：

```
tsc -V 
```

## TypeScript快速入门

src/ts入门.ts

```ts
(() => {
  // ts语法：规定str为String类型
  function sayHello(str: String) {
    return "你好" + str;
  }
  let text = "typescript";
  console.log(sayHello(text));
})();
```

html文件直接引入ts的文件，浏览器报错，（若ts文件中只使用js的语法则不会报错，出现ts语法才报错）需要编译成js文件后，引入编译后的文件。

### 手动编译

在命令行上，运行 TypeScript 编译器：

```sh
tsc ts入门.ts  
```

输出结果为一个 `ts入门.js` 文件，将ts代码编译成相同的 JavsScript 代码。

### VSCode自动编译

1). 生成配置文件tsconfig.json

```sh
tsc -init
```

2). 修改tsconfig.json配置

```json
"outDir": "./js",   //编译后的js文件输出目录
"strict": false,    //不使用严格模式
```

3). 启动监视任务: 

在VSCode工具栏依次选择：

 `terminal -> run task -> tsc:watch tsconfig.json` 

编写ts文件代码后，自动生成js目录和编译后的js文件：

![自动编译](https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202206201201816.png)

## 类型注解

TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式。 在这个例子里，我们希望 `greeter` 函数接收一个字符串参数。 

```ts
function greeter (person: string) {
  return 'Hello, ' + person
}
let user = 'Yee'

console.log(greeter(user))
```

然后尝试把 `greeter` 的调用改成传入一个数组：

![类型注解的作用](https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202206201213943.png)

类似地，尝试删除 `greeter` 调用的所有参数。 TypeScript 会告诉你使用了非期望个数的参数调用了这个函数。 在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。

要注意的是尽管有错误，`greeter.js` 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告你代码可能不会按预期执行。

## 接口

这里我们使用接口来描述一个拥有 `firstName` 和 `lastName` 字段的对象。 在 `TypeScript` 里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 `implements` 语句。

```ts
(() => {
  //定义一个接口
  interface IPerson {
    //姓氏
    firstName: String;
    //名字
    lastName: String;
  }
  // 返回全名，规定入参为定义的IPerson类型
  function showFullName(person: IPerson) {
    return person.firstName + "_" + person.lastName;
  }
  // 定义对象
  const person = {
     //当注释掉其中一个属性之后，下方调用时传入参数就会报错,提示需要IPerson类型的数据，需要firstName和lastName
    firstName: "东方",
    lastName: "不败",
  };
  //传入非IPerson类型出现报错
  console.log(showFullName(person));
})();

```



## 类

 TypeScript 支持 JavaScript 的新特性，比如支持基于类的面向对象编程。

让我们创建一个 `Person` 类，它带有一个构造函数和一些公共字段。因为类的字段包含了接口所需要的字段，所以他们能很好的兼容。

还要注意的是，我在类的声明上会注明所有的成员变量，这样比较一目了然。

```ts
(() => {
  //定义接口
  interface IPerson {
    firstName: String;
    lastName: String;
  }

  // 定义类
  class Person {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = this.firstName + "_" + this.lastName;
    }
  }

  // 输出姓名
  function showFullName(person: IPerson) {
    return person.firstName + "_" + person.lastName;
  }
  const person = new Person("诸葛", "孔明");
})();

```

## 使用webpack打包TS

1）新建目录如下：

--> `/build` 存放 `webpack.config.js` 配置文件

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production"; // 是否生产环境

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    app: "./src/main.ts",
  },

  output: {
    path: resolve("dist"),
    filename: "[name].[contenthash:8].js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [resolve("src")],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  devtool: isProd ? "cheap-module-source-map" : "cheap-module-eval-source-map",

  devServer: {
    host: "localhost", // 主机名
    stats: "errors-only", // 打包日志输出输出错误信息
    port: 8081,
    open: true,
  },
};
```

--> `/public` 存放 `index.html`入口文件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack打包ts配置</title>
  </head>
  <body></body>
</html>
```

--> `/src` 存放 `main.ts` 文件

2）在项目目录下使用命令初始化ts的配置文件

```sh
tsc --init
```

3）在项目目录下初始化webpack配置

```sh
npm init
```

4）安装依赖（`package.json 下`，`以下版本为兼容状态，可能存在不兼容的情况。--2022.6.21`）

```js
"devDependencies": {
    "typescript": "^4.0.5",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.2",
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.2",
    "html-webpack-plugin": "^4.5.0",
    "ts-loader": "^8.0.11"
  }
```

5）写入运行脚本（`package.json 下`，`使用cross-env主要实现跨系统环境脚本`）

```js
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  },
```

6）在`main.ts`中写入内容运行测试：

```sh
npm run dev
```

结果：

![测试结果](https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202206211328029.png)

7）打包

```sh
npm run build
```

打包输入内容：

![image-20220621135652247](https://pic-go.oss-cn-shanghai.aliyuncs.com/typora-img/202206211356288.png)

## TypeScript常用语法

### 基础类型



#### 布尔值

最基本的数据类型就是简单的 true/false 值，在JavaScript 和 TypeScript 里叫做 `boolean`（其它语言中也一样）。

```typescript
let isDone: boolean = false;
isDone = true;
// isDone = 2 // error
```



#### 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015中引入的二进制和八进制字面量。

```typescript
let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制
```



#### 字符串

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 `string` 表示文本数据类型。 和 JavaScript 一样，可以使用双引号（`"`）或单引号（`'`）表示字符串。

```typescript
let name:string = 'tom'
name = 'jack'
// name = 12 // error
let age:number = 12
const info = `My name is ${name}, I am ${age} years old!`
```



#### undefined 和 null

TypeScript 里，`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null`。 它们的本身的类型用处不是很大：

```typescript
let u: undefined = undefined
let n: null = null
```

默认情况下 `null` 和 `undefined` 是所有类型的子类型。 就是说你可以把 `null` 和 `undefined` 赋值给 `number` 类型的变量。（==需要在非严格模式下！！==）



#### 数组和元组

元组类型允许表示一个已知元素数量和类型的数组，`各元素的类型不必相同`。 比如，你可以定义一对值分别为 `string` 和 `number` 类型的元组。

```typescript
let t1: [string, number]
t1 = ['hello', 10] // OK
t1 = [10, 'hello'] // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```typescript
console.log(t1[0].substring(1)) // OK
console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法
```



#### 枚举类型

`enum` 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以`为一组数值赋予友好的名字`。

```typescript
enum Color {
  Red,
  Green,
  Blue
}

// 枚举数值默认从0开始依次递增
// 根据特定的名称得到对应的枚举数值
let myColor: Color = Color.Green  // 0
console.log(myColor, Color.Red, Color.Blue)
```

默认情况下，从 `0` 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 `1` 开始编号：

```typescript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green
```

或者，全部都采用手动赋值：

```typescript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：

```typescript
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2]

console.log(colorName)  // 'Green'
```



#### any 类型

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any` 类型来标记这些变量：

```typescript
let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean
```

在对现有代码进行改写的时候，`any` 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。并且当你只知道一部分数据的类型时，`any` 类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```typescript
let list: any[] = [1, true, 'free']

list[1] = 100
```



#### void类型

某种程度上来说，`void` 类型像是与 `any` 类型相反，它`表示没有任何类型`。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```typescript
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
  console.log('fn()')
  // return undefined
  // return null
  // return 1 // error
}
```

声明一个 `void` 类型的变量没有什么大用，因为你只能为它赋予 `undefined` 和 `null`：

```typescript
let unusable: void = undefined
```

#### object类型

`object` 表示非原始类型，也就是除 `number`，`string`，`boolean`之外的类型。

使用 `object` 类型，就可以更好的表示像 `Object.create` 这样的 `API`。例如：

```typescript
function getObj(obj: object): object {
  console.log(obj);
  return {
    name: "qzk",
    age: 22,
  };
}
console.log(getObj({ name: "ts", age: 20 }));
```

#### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种
需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值

```typescript
function toString2(x: number | string) : string {
  return x.toString()
}
```

需求2: 定义一个一个函数得到一个数字或字符串值的长度

```typescript
function getLength(x: number | string) {

  // return x.length // error

  if (x.length) { // error
    return x.length
  } else {
    return x.toString().length
  }
}
```

#### 类型断言

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法, 另一个为 `as` 语法

```typescript
/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/

/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length
  } else {
    return x.toString().length
  }
}
console.log(getLength('abcd'), getLength(1234))
```

#### 类型推断

类型推断: TS会在没有明确的指定类型的时候推测出一个类型
有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型

```typescript
/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123 // number
// b9 = 'abc' // error

/* 定义变量时没有赋值, 推断为any类型 */
let b10  // any类型
b10 = 123
b10 = 'abc'
```



### 接口

TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。`接口是对象的状态(属性)和行为(方法)的抽象(描述)`

需求: 创建人的对象, 需要对人的属性进行一定的约束

- id是number类型, 必须有, 只读的
- name是string类型, 必须有
- age是number类型, 必须有
- sex是string类型, 可以没有

```ts
/* 需求: 创建人的对象, 需要对人的属性进行一定的约束
    id是number类型, 必须有, 只读的
    name是string类型, 必须有
    age是number类型, 必须有
    sex是string类型, 可以没有 */
  interface IPerson {
    // 只读 id
    readonly id: number;
    name: string;
    age: number;
    // 可选
    sex?: string;
  }
  const person: IPerson = {
    id: 1,
    name: "qzk",
    age: 22,
    // 没有sex 不报错, sex可选
  };

  // 只读id无法修改
  // person.id = 100 //error
```

#### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。

```typescript
interface IPerson {
  id: number
  name: string
  age: number
  sex?: string
}
```

带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个 `?` 符号。

可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。

```typescript
const person2: IPerson = {
  id: 1,
  name: 'tom',
  age: 20,
  // sex: '男' // 可以没有
}
```

#### 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly` 来指定只读属性:

```typescript
interface IPerson {
  readonly id: number
  name: string
  age: number
  sex?: string
}
```

一旦赋值后再也不能被改变了。

```typescript
const person2: IPerson = {
  id: 2,
  name: 'tom',
  age: 20,
  // sex: '男' // 可以没有
  // xxx: 12 // error 没有在接口中定义, 不能有
}
person2.id = 2 // error
```

#### readonly vs const

最简单判断该用 `readonly` 还是 `const` 的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 `const`，若做为属性则使用 `readonly`。

#### 函数类型

接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```typescript
/* 
接口可以描述函数类型(参数的类型与返回的类型)
*/

interface SearchFunc {
  (source: string, subString: string): boolean
}
```

这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

```typescript
const mySearch: SearchFunc = function (source: string, sub: string): boolean {
  return source.search(sub) > -1
}

console.log(mySearch('abcd', 'bc'))
```

#### 类类型

##### 类实现接口

Java 里接口的基本作用一样，TypeScript 也能够用它来明确的强制一个类去符合某种契约。

```typescript
/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
*/

interface IFly {
    fly(): void;
  }
  class Person implements IFly {
    fly(): void {
      console.log("i can fly");
    }
  }
```

####  一个类可以实现多个接口

```ts
interface IFly {
   fly(): void;
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
```

####  	接口继承接口

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```ts
interface IFly {
   fly(): void;
}
interface ISwim {
   swim(): void;
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
```

