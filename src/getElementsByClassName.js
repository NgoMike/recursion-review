// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //declare empty array = node result
  var resultArray = [];
  // console.log(document.body.childNodes);
  var allNodes = function (nodes, className) {
    var nodeList = nodes.childNodes;
    //console.log("nodeList: ", nodeList);
    //iterate through nodes
    for (var i = 0; i < nodeList.length; i++) {
      var node = nodeList[i];
      var classList = node.classList;
      for (var j = 0; j < classList.length; j++) {
        
        if (classList[j] === className) {
          resultArray.push(node);
          
        }
        if (node.childNodes[0]) {
          allNodes(node, className);
        }
      }
    }
    //see if className exist then push to result array
    allNodes(document.body, className);
    //return result array
    return resultArray;
  };
};
