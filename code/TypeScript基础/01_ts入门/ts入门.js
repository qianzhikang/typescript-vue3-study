(function () {
    // ts语法：规定str为String类型
    function sayHello(str) {
        return "你好" + str;
    }
    var text = "typescript";
    console.log(sayHello(text));
})();
