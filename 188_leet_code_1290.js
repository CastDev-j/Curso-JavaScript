/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var getDecimalValue = function (head) {
    let binary = '';
    while (head) {
        binary += head.val;
        head = head.next;
    }

    return parseInt(binary, 2);
};
console.log(getDecimalValue([1, 0, 1])); // 5