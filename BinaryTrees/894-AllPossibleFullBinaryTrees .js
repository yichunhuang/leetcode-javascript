/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} 
 * @return {TreeNode[]}
 */

/*
解題思路
1. nodes 一定要是奇數才會是 full binary tree(有左節點一定也要有右節點)
2. 子樹其實就是 N 帶比較小獲得的解

Pseudo
tree(n) :
    for i = 1 to n
        root.left = tree(i) // 會有一個 array of BST 可以選
        root.right = tree(n - i - 1) // 會有一個 array of BST 可以選
*/
var allPossibleFBT = function(N) {
    if (N % 2 == 0) {
        return []
    }
    if (N == 1) {
        return [new TreeNode(0)]
    }

    let ans = []
    for (let i = 0; i < N; i ++) {
        let allPossibleLeft = allPossibleFBT(i)
        let allPossibleRight = allPossibleFBT(N - i - 1)
        allPossibleLeft.forEach(left => {
            allPossibleRight.forEach(right => {
                let root = new TreeNode(0)
                root.left = left
                root.right = right
                ans.push(root)
            })
        })
    }
    return ans
};