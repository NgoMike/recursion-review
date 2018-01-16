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
      if (typeof obj[i] === 'string') {
        result.push('"' + obj[i] + '"');
      } else if (typeof obj[i] === 'number' || typeof obj[i] === 'boolean' || obj[i] === null) {
        result.push(obj[i]);
      }

      if (obj[i] instanceof Object) {
        result.push(stringifyJSON(obj[i]));
      }
    }

    return '[' + result + ']';
  } else if (obj instanceof Object) {
    var keys = Object.keys(obj);
    var objStr = [];
    for (var i = 0; i < keys.length; i++) {
      var keyStr = '"' + keys[i] + '":'; 

      if (obj[keys[i]] instanceof Function || obj[keys[i]] === undefined) {
        continue;
      } else if (typeof obj[keys[i]] === 'number' || typeof obj[keys[i]] === 'boolean' || obj[keys[i]] === null) {
        objStr.push(keyStr + obj[keys[i]]);
      } else {
        objStr.push(keyStr + stringifyJSON(obj[keys[i]]));
      }
    }

    objStr.join();
    return '{' + objStr + '}';   
  }
};
