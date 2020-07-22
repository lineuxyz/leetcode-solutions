var levelOrderBottom = function(root) {
  let h = height(root);
  let results = [];
  let depth = 1;
  for (depth; depth <= h; depth++) {
    results.push(levelOrder(root, depth));
  }

  return results.reverse();
};

function levelOrder(node, d, level = []) {
  if (node == null) {
    return level;
  }
  if (d === 1) {
    level.push(node.val);
  } else if (d > 1) {
    levelOrder(node.left, d - 1, level);
    levelOrder(node.right, d - 1, level);
  }
  return level;
}

function height(node) {
  if (node == null) {
    return 0;
  }
  let left = height(node.left);
  let right = height(node.right);

  return Math.max(left, right) + 1;
}