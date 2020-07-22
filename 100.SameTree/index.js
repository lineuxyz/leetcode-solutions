var isSameTree = function(p, q) {
  if (p === null && q === null) {
  return true;
} else if (p === null || q === null) {
  return false;
}
if (p.val === q.val) {
  let leftSame = isSameTree(p.left, q.left);
  let rightSame = isSameTree(p.right, q.right);
  return leftSame && rightSame;
}
return false;
};