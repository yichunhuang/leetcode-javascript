/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/* 解題思路
遞迴
1. 先找到樹總和 St
2. Post Order Traversal (left -> right -> root)
2-a. 找到左子樹和右子樹各自的總和 Sl, Sr
2-b. 檢查目前的最大值 ans 和 新的兩個子樹乘以剩下的值誰大) ans = max(Sl * (St - Sl), Sr * (St - Sr), ans
2-c. return 左子樹 + 右子樹 + 本身的 value

2-a & 2-c 是原本的 Post Order Traversal 作法，2-b 為題目所需

Time Complexity O(n)
Space Complexity O(n)
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    let sum = (node) => {
      if (!node) {
        return 0
      }
      return node.val + sum(node.left) + sum(node.right)
    }

    let postOrder = (node) => {
      if (!node) {
        return 0
      }

      const Sl = postOrder(node.left)
      const Sr = postOrder(node.right)
      ans = Math.max(ans, Sl * (St - Sl), Sr * (St - Sr))

      return node.val + Sl + Sr
    }

    const M = 10 ** 9 + 7
    const St = sum(root)
    let ans = 0
    postOrder(root)
    return ans % M
};
