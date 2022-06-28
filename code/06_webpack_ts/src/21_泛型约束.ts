(() => {
  // 定义一个接口，用来约束将来的某个类型中必须要有length这个属性
  interface ILength {
    length: number;
  }
  // 入参泛型继承接口，必须带有length属性
  function getLength<T extends ILength>(x: T) {
    return x.length;
  }

  console.log(getLength<string>("qzkqzk"));
  // console.log(getLength<number>(123)); //error number不具有length
})();
