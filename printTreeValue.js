// in-order printing the tree:

//1) initial current as root:
// 2) while current is not null:
 //a) if current has not left child: print it and go to the current.right;
 //else
  //make the current to be the most right node in current left child;
 //go to the left child; current = current.left;
var printTreeValue = root =>{
  let current = root;
  let pre = null;
  while(current != null){
    if(current.left == null){
      console.log(current.value); // 2
      current = current.right; //current = 5;
    }else{
      pre = current.left; //
      while(pre.right != null && pre.right != current){
        pre = pre.right; // finding the most right in left branch
      }
      if(pre.right == null){
        pre.right = current;    //link the tail of pre.right to the current.
        current = current.left; //move the current to the left;
      }else{
        pre.right = null;
        console.log(current.value);
        current = current.right;
      }
    }
  }
}

// 2 , 5 , 6 , 7,  8,  9,  10
// function tree(){
//   value:
//   left:
//   right:
// }

//        7
//    5         9
// 2     6    8   10
