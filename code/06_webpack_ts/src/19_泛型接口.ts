(() => {
  interface IBaseCRUD<T> {
    data: Array<T>;
    add: (t: T) => T;
    getInfoById: (id?: number) => T;
  }

  class User {
    id?: number;
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  class UserCRUD implements IBaseCRUD<User> {
    data: Array<User> = [];
    add(user: User): User {
      user.id = Date.now() + Math.random();
      this.data.push(user);
      return user;
    }
    getInfoById(id?: number): any {
      return this.data.find((user) => user.id === id);
    }
  }

  const userCrud: UserCRUD = new UserCRUD();
  userCrud.add(new User("qzk1", 22));
  userCrud.add(new User("qzk2", 23));
  userCrud.add(new User("qzk3", 24));
  // add方法返回user对象， 从user对象中解构出id
  const { id } = userCrud.add(new User("qzk4", 25));
  console.log(userCrud.data);
  console.log(userCrud.getInfoById(id));
})();
