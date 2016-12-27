var swapPairs = function(head) {
    var nodePrev = null;
    var nodeNext = null;
    var nodeFirst = head;
    if(nodeFirst === null) return null;
    var nodeSecond = nodeFirst.next;
    if(nodeSecond === null) return head;
    var nodeHead = null;
    while(nodeFirst !== null){
      nodeSecond = nodeFirst.next;
      if(nodeSecond === null) break;
      // this is [1, 2, 3, 4] :
      // nodeNext = 3,4;
      nodeNext = nodeSecond.next;
      // putting 1 --> 3;
      nodeFirst.next = nodeNext;
      //putting 2 --> 1
      nodeSecond.next = nodeFirst;
      // putting head == 2;
      if(nodeHead === null) nodeHead = nodeSecond;
      //adding the nodePrev: add 4 with 1. !! This is the most important step of the program.
      if(nodePrev !== null)  nodePrev.next = nodeSecond;
      //adding the nodePrev == 1
      nodePrev = nodeFirst;
      //move the nodeFirst to be 3.
      nodeFirst = nodeNext;
    }
    return nodeHead;
};
