'use strict';

function validate(input){
    var inputList = input;
    var digit = false;
    var single = false;

    if(inputList.length !== 4) return false;
    digit = true;

    var count = inputList.filter(function (item, index,self) {
        return self.indexOf(item) == index;
    }).filter(function (num) {
        return num < 10;
    }).length;

    if(count == 4) single = true;

    return digit && single;
}

module.exports = validate;