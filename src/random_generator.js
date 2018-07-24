'use strict';

/*  num 要产生多少个随机数
    from 产生随机数的最小值
    to 产生随机数的最大值   */
function randomGenerator(num,from,to){
    var t='';
    var json={};
    var count = 0;
    while(count<num)
    {
        //产生单个随机数
        var ranNum=Math.ceil(Math.random()*(to-from))+from;
        //通过判断json对象的索引值是否存在 来标记 是否重复
        if(!json[ranNum])
        {
            json[ranNum]=1;
            t+=ranNum;
            count++;
        }

    }
    console.log("random:"+ t);
    return t.replace(/(.)(?=[^$])/g,"$1,").split(",");
}

module.exports = randomGenerator;
