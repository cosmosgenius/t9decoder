/*jslint node: true */
'use strict';

/**
 * A Map holding mapping of number to letter in a T9 keypad
 * @type {Map}
 */
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


/**
 * findRepeatValue finds the number of times a value has repeated
 * in a continuous order 
 * @param  {Array} array :Input array in which the repeat value is to be found
 * @return {Array}       An array with each object in the following format
 *                          {
 *                              number : <value repeating>,
 *                              repeat : <number of times it is repeated>
 *                          }
 */
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

/**
 * t9decode function return the string value of the t9 encoded number
 * @param  {String} value :Encoded t9 value
 * @return {String}       :Decocded t9 value
 */
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