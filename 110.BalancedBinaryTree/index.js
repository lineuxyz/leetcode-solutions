var isBalanced = function(root) {
    
  const callDFS = (node) => {
      if(!node) return true;
      
      const left = callDFS(node.left);
      const right = callDFS(node.right);
      
      if(!left || !right || Math.abs(left - right) > 1) return false;
      return Math.max(left, right) + 1;
  }
  return callDFS(root)
};