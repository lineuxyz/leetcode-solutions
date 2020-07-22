var isSymmetric = function(root) {
  if (!root) return true;
  
  function checkSymmetry(leftTree, rightTree) {
    if (!leftTree && !rightTree) return true;
    
    if (leftTree && rightTree) {
      return (
        leftTree.val === rightTree.val &&
        checkSymmetry(leftTree.left, rightTree.right) &&
        checkSymmetry(leftTree.right, rightTree.left)
      );
    }
    
    return false;
  }
  
  return checkSymmetry(root.left, root.right);
};