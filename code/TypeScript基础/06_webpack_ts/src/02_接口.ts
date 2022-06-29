// ts中的接口
(() => {
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
})();
