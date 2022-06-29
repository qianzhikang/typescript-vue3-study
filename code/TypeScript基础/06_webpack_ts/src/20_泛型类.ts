(() => {
  class GenericNumber<T> {
    defaultValue: T;
    add: (x: T, y: T) => T;
  }

  const g1: GenericNumber<number> = new GenericNumber<number>();
  g1.defaultValue = 100;
  g1.add = function (x: number, y: number): number {
    return x + y;
  };
  console.log(g1.add(g1.defaultValue, 20));

  const g2: GenericNumber<string> = new GenericNumber<string>();
  g2.defaultValue = "qzk";
  g2.add = function (x: string, y: string): string {
    return x + y;
  };
  console.log(g2.add("10", g2.defaultValue));
})();
