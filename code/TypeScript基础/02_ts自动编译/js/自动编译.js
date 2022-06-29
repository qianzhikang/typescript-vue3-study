(() => {
    // ts语法：规定str为String类型
    function sayHello(str) {
        return "你好" + str;
    }
    let text = "typescript";
    console.log(sayHello(text));
})();
