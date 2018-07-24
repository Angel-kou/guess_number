'use strict';

function restrict(count){
    if(count > 6){
        console.log("game over!");
        return true;
    }
    return false;
}

module.exports = restrict;