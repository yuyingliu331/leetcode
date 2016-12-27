function validTree(root, higher, lower){
 if(!root) return true;
 else if(root.value > higher || root.value < lower) return false;
 else validTree(root.left, root.value, lower), validTree(root.right, higher, root.value);
}

// second largest number in binary search tree:

function secondLargest(tree){
 var nodes = [];
 nodes.push(tree);
 while(nodes.length){
   var node = nodes.pop();

 }
}
