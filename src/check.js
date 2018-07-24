'use strict';

function check(random , inputNumber){
    var result =[0,0];
    for(let num of inputNumber){
        var isExist = random.indexOf(num);
        if(isExist !== -1){
            if(isExist == inputNumber.indexOf(num)){
                result[0]++;
            }else{
                result[1]++;
            }
        }
    }

    return result;
}

module.exports = check;