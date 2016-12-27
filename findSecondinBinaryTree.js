//find the second smallest number in a binary search tree:


//        6
//    3        8
// 2    4   7     9
//1       5


function findSeconLar(root, n){
  var result = null;
  while(root != null){
    if(root.key < n){
      result = root.key;
      root = root.right;
    }else{
      root = root.left;
    }
  }
  return result;
}

//find the second largest number in the binary tree:

           6
      3        7
   2     4          8
 1          5

function binaryTree(root){
  var result = null;
  var max = root.value;
  while(root.right != null || root.left != null){
    if(root.right) {
      result = root;
      root = root.right;
    if(root.value < max){
      result = root;
    }
   if(root.left) {
     result = root.left;
     root = root.left;
   }

  }

  return result;
}
