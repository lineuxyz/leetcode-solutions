var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return;
  let lists = new Set();
  
  while (headA) {
    lists.add(headA);
    headA = headA.next;
  }
  
  while(headB) {
    if (lists.has(headB)) return headB;
    headB = headB.next;
  }
};