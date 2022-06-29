(() => {
  // firstName 有默认值qzk，称为默认参数
  // lastName 使用？修饰，表示可选参数
  const getFullName = function (
    firstName: string = "qzk",
    lastName?: string
  ): string {
    if (lastName) {
      return firstName + "_" + lastName;
    } else {
      return firstName;
    }
  };
  console.log(getFullName()); // qzk
  console.log(getFullName("123")); // => 123
  console.log(getFullName("qq", "ww")); //=> qqww
})();
