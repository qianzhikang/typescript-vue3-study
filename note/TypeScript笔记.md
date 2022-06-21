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

