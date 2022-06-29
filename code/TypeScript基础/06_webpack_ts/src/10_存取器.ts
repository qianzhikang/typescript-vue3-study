(() => {
  class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
      console.log("get中...");
      return this.firstName + "_" + this.lastName;
    }
    set fullName(val: string) {
      console.log("set中...");
      let names = val.split("_");
      this.firstName = names[0];
      this.lastName = names[1];
    }
  }
  const person = new Person("q", "zk");
  console.log(person);
  console.log(person.fullName);
  person.fullName = "qzk_123";
  console.log(person);
  console.log(person.fullName);
})();
