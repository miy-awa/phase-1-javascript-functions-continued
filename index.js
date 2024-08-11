// code your solution here
/*function sartudayFun(){
    console.log("This sartuday i want to....!")
}
sartudayFun()*/

/*function razzle(lawyer ="Billy", target = "'em"){
    console.log(`${lawyer} razzle-dazzles ${target}!`)
}
razzle();
razzle("Methuselah", "T'challah");*/


/*(function() {
    console.log("Yet more razzling");
});*/

/*const button = document.getElementById("button");
button.addEventListener("click", function () {
    console.log("Yet more razzling");
})*/

/*const fn = function () {
    console.log("Yet more razzling");
};
fn()*/

/*const mondayWork = function () {
    console.log("This Monday i will have learnt javascript")
}
mondayWork()*/

/*console.log((function (baseNumber) {
    return baseNumber + 3;
})(2));*/

/*function outer(greeting = "Hello", msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    console.log(innerFunction("student", "JavaScript"));
}

outer("Hello");*/

/*const array = (function (thingToAdd) {
    const base = 3;
    return [
        function () {
            return base + thingToAdd;
        },
        function () {
            return base;
        },
    ];
})(2);*/

/*function demoChain(name) {
    const part1 = "hi"
    return function () {
        const part2 = "there";
        return function () {
            console.log(`${part1.toUpperCase()}${part2} ${name}`);
        };
    };
}

demoChain("Dr. Stephen Strange")()();*/

(function (baseNumber) {
    return baseNumber + 3;
})(2);