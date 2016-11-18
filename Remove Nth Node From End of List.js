/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(!head) return null;
  var curNode = head;
  var arr = [];

  // get the list of values in the node
  while(curNode != null){
    arr.push(curNode);          // push the whole node into array.
    curNode = curNode.next;
  }
  //update the list Node:
  if(arr.length - n === 0)  return head.next;
  var node = arr[arr.length - n];
  var nodePre = n < arr.length ? arr[arr.length - n -1] : null;
  var nodeNext = n === 1? null: arr[arr.length - n +1];
  if(nodePre === null) return nodeNext;
  else{
    nodePre.next = nodeNext;
    return head;

  }





};
