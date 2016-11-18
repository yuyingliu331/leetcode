
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //example : l1: 25 --> 26 ---> 27 ----> 28
 // l2:     16 ----> 28 ---> 29   ----> 30
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var lHead = null;
    var lCur = null;
    while (l1 !== null || l2 !== null) {
        if (l1 === null) {
            lCur = splice(lCur, l2);
            return lHead || lCur; //lHead is updated because of pass by reference.  lCur is an object. and when object key is updated, lHead is updated. this is not pass by value.
        }
        else if (l2 === null) {
            lCur = splice(lCur, l1);
            return lHead || lCur;
        }
        else {
            if (l1.val < l2.val) {
                if (lCur === null) {
                    lHead = l1;
                    lCur = lHead;
                }
                else {
                    lCur.next = l1; //Add the new list node to the merged lsit node.
                    lCur = l1; // lCur will become the merged listNode. LCur is keeping track of the current node.
                }
                l1 = l1.next;
            }
            else {
                if (lCur === null) {
                    lHead = l2;
                    lCur = lHead;
                }
                else {
                    lCur.next = l2;
                    lCur = l2;

                }
                l2 = l2.next;
            }
        }
    }
    return lHead;
};

function splice(lMerged, l) {
    if (lMerged === null) return l;
    else {
        lMerged.next = l;
        return lMerged;
    }
}
