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
  console.log(showFullName(person));
})();
