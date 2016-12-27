function linkedList(){
  data:
  next:
}
//recursive way:

function isPalidrome(head){
  let len = lengthOfList(head);
  let p = isPalidromeRecurse(head, len);
  return p.result;
}

function isPalidromeRecurse(head, len){
  if(head == null || len <= 0){
    return
  }else if(len == 1){
    return
  }

  let res = isPalidromeRecurse(head.next, len -2);

  if(!res.result || res.node == null){
    return res;
  }

  res.result = (head.data == res.node.date);
  res.node = res.node.next;

  return res;
}

var lengthOfList(head){
  let size = 0;
  while(head != null){
    size++;
    head = head.next;
  }
  return size;
}




