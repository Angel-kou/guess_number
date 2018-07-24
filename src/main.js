'use strict';

var randomGenerator = require("../src/random_generator.js");
var inputNumber = require("../src/input_number.js");
var check = require("../src/check.js");
var restrict = require("../src/restrict.js");

console.log(`--------------Guess Number Game, You have 6 chances to guess!--------------------`);
var count = 1;
var history = [];
var random = randomGenerator(4,0,9);
while (!restrict(count)) {

    var input = inputNumber();
    var check_result = check(random,input);
    if(check_result[0] == 4 && check_result[1] == 0){
        console.log("--------------------------congratulations! -------------------------------");
        break;
    }
    history.push("random:"+random+"    input :"+input+"     result:"+check_result[0]+"A"+check_result[1]+"B");
    console.log(history);
    count++;
}








