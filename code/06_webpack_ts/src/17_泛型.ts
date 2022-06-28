(() => {
  function getArr<T>(value: T, count: number): T[] {
    const arr: Array<T> = [];
    for (let i = 0; i < count; i++) {
      arr.push(value);
    }
    return arr;
  }
  // 在调用的时候指定函数返回类型，好处是在这个例子中可以明确数组中的元素类型 如 arr1[0] 为number
  const arr1 = getArr<number>(200.12, 3);
  const arr2 = getArr<string>("qzk", 3);
})();
