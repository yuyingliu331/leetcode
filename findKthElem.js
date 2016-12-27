var printKToLast =(head, k)=>{
  if(head == null) return 0;
  var index = printKToLast(head.next, k)+1;
  if(index == k){
    console.log(head.data);
  }
  return index;
}

//delete the middle ndoe:

