(() => {
  function add(x: string, y: string): string;
  function add(x: number, y: number): number;

  function add(
    x: string | number,
    y: string | number
  ): string | number | undefined {
    if (typeof x === "string" && typeof y === "string") {
      return x + y;
    } else if (typeof x === "number" && typeof y === "number") {
      return x + y;
    }
  }

  // console.log(add(1, "2")); //error 非法参数传递
  console.log(add(1, 2));
  console.log(add("1", "2"));
})();
