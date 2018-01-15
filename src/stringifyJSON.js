// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //check if Array
  var result = [];

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  } else if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (Array.isArray[obj[i]]) {
        result.push(stringifyJSON(obj[i]));
      }
    }
  } else if (obj instanceof Object) {
  //objects
    
  }


  return result;
};
