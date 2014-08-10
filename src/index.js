/*jslint node: true */
'use strict';
var t9Map = {
    '2':['a','b','c'],
    '3':['d','e','f'],
    '4':['g','h','i'],
    '5':['j','k','l'],
    '6':['m','n','o'],
    '7':['p','q','r','s'],
    '8':['t','u','v'],
    '9':['w','x','y','z'],
    '0':[' ']
};

function findRepeatValue(array){
    return array.reduce(function(previous, current){
        var last;

        if(previous.length){
            last = previous[previous.length - 1];
            if(last.number === current){
                last.repeat += 1;
            } else {
                previous.push({
                    number : current,
                    repeat : 1
                });
            }
        } else {
            previous.push({
                number : current,
                repeat : 1
            });
        }

        return previous;
    },[]);
}

function t9decode (value) {
    var valueArray = value.split('');
    var repeatMap = findRepeatValue(valueArray);
    var stringArray = repeatMap.reduce(function(previous, current){
        if ( current.number === ' '){
            return previous;
        }
        var numberArray = t9Map[current.number];
        var value = numberArray[current.repeat - 1];
        previous.push(value);
        return previous;
    },[]);
    return stringArray.join('');
}

module.exports = t9decode;