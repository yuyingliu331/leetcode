var isIntersected = (list1, list2)=>{
  if(list1 == null || list2 == null) return null;
  Result result1 = getTailAndSize(list1);
  Result result2= getTailAndSize(list2);

  if(result1.tail != result2.tail) return null;

  LinkedListNode shorter = result1.size < result2.size ? list1: list2;
  LinkedListNode longer = result1.size < result2.size ? list2 : list1;
  // advance the longer pointer by difference in length:
  longer = getKthNode(longer, Math.abs(result1.size - result2.size));

   // move both pointers until you have a collision:
   while(shorter != longer){
    shorter = shorter.next;
    longer = longer.next;
   }
   //return either one: when we find the intersection:
   return longer;
}

class Result {
  public LinkedListNode tail;
  public int size;
  public Result(LinkedListNode tail, int size){
    this.tail = tail;
    this.size = size;
  }
}

Result getTailAndSize(list){
  if(list == null) return null;
  let size = 1;
  let current = list;
  while(current.next != null){
    size++;
    current = current.next;
  }
  return new Result(current, size);
}

function getKthNode(head, k){
  let current = head;
  while(k > 0 && current != null){
    current = current.next;
    k--;
  }
  return current;
}
