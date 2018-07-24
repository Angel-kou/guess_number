'use strict';

var validate = require("../src/validate.js");

function input() {
    var scanf = require('scanf');
    console.log('Pleas input valid number:');
    var number = scanf('%s').replace(/(.)(?=[^$])/g,"$1,").split(",");
    while (!validate(number)) {
        console.log('Wrong Input，Input again:');
        number = scanf('%s').replace(/(.)(?=[^$])/g,"$1,").split(",");
    }
    return number;
}

module.exports = input;