(() => {
  // 定义一个接口作为某个函数的类型使用
  interface ISearchFunc {
    // 定义调用签名
    (source: string, subString: string): boolean;
  }

  // 定义一个函数，该类型为定义的接口
  const searchString: ISearchFunc = function (
    source: string,
    subString: string
  ): boolean {
    return source.search(subString) > -1;
  };

  console.log(searchString("qzkqzk", "q"));
})();
