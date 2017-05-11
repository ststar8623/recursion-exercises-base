const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  // your code goes here
  if(obj === null){
    return 'null';
  } else if(typeof obj === 'boolean' || typeof obj === 'number'){
    return obj.toString();
  } else if(typeof obj === 'string') {
    return '"' + obj + '"';
  } else if(Array.isArray(obj)){
    let res = obj.map(el => {
      return stringify(el);
    });
    return '[' + res.join(',') + ']';
  } else if(typeof obj === 'object'){
    let res = '{';
    for(let key in obj){
      res += stringify(key) + ':' + stringify(obj[key]);
    }
    return res + '}';
  }
};

module.exports = {
  stringify: stringify
};