(() => {
  //定义一个接口
  interface IPerson {
    //姓氏
    firstName: String;
    //名字
    lastName: String;
  }
  // 返回全名
  function showFullName(person: IPerson) {
    return person.firstName + "_" + person.lastName;
  }
  // 定义对象
  const person = {
    firstName: "东方",
    lastName: "不败",
  };
  console.log(showFullName(person));
})();
