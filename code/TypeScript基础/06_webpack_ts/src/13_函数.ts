(() => {
  // 命名函数
  function add(x: number, y: number): number {
    return x + y;
  }
  // 函数表达式
  const add2 = function (x: number, y: number): number {
    return x + y;
  };

  // 函数完整写法
  const add3: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };
})();
