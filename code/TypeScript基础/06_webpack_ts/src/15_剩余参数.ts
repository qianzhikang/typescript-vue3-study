// 剩余参数
(() => {
  function showMsg(str: string, ...args: string[]): void {
    console.log(str); //a
    console.log(args); //[b,c,d,e]
  }
  showMsg("a", "b", "c", "d", "e");
})();
