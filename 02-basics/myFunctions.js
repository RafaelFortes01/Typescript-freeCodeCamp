"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return 'hello'
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper('rafael');
signUpUser('Rafael', 'rafael@123', true);
loginUser('Pedro', 'pedro@123');
// function getValue(myVal: number): string {
//    if (myVal > 5) {
//       return true
//    } else {
//       return '200 ok'
//    }
// } 
var getHello = function (s) {
    return '';
};
var heros = ['Thor', 'Spiderman', 'Ironman'];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
