let loopDetection = list => {
  let visited = [];
  let current = list;
  while(current != null){
    if(visited.indexOf(current) == -1){
      visited.push(current);
    }else return current;
    if(current.next) current = current.next;
  }
  return null;
}

// solution:

//A-B-C-D-E-C
//
let findBeginning = head => {
  let slow = head;
  let fast = head;
  while(fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
    if(fast == slow){
      break;   //collision appeared.
    }
  }

  if(fast == null || fast.next == null){
    return null;
  }

  slow = head;  // A  C
  while(slow != fast){
    slow = slow.next; // B  C
    fast = fast.next; // D E
  }
  return fast;


}
