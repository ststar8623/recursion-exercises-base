const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  let arr = flattenTreeToArray(root);
  let res;
  _.each(arr, el=>{
    if(el.id === id){
      res = el;
    }
  })
  return res;
};

const getElementsByClassName = function(root, className) {
  // Your code here
  let arr = flattenTreeToArray(root);
  let res = [];
  _.each(arr, el=>{
    for(let name in el.classList){
      if(el.classList[name] === className){
        res.push(el);
      }
    }
  });
  return res;
  
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  let arr  = flattenTreeToArray(root);
  let res = [];
  _.each(arr, el=>{
    if(el.tagName === tagName){
      res.push(el);
    }
  });
  return res;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
