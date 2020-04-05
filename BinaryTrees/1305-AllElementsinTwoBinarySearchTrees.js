/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
/*
解題思路：最簡單就是全部的 elements 拿出來放到 array 然後 quick sort 排序，時間複雜度為 O(nlogn)
更快的是用 inorder traversal BST 拿到排序好的兩個陣列，再 merge，時間複雜度就會降到 O(n)

Solution: Inorder Traversal + Merge two arrays together
1. Inorder Traversal of each BST 
2. merge two traversal ordered arrays

Time complexity: O(n)
Space complexity: O(n)
*/
var getAllElements = function(root1, root2) {
    let inorder = (node, arr) => {
        // left -> root -> right
        if (!node) {
            return
        }
        inorder(node.left, arr)
        arr.push(node.val)
        inorder(node.right, arr)
    }

    let merge = (arr1, arr2) => {
        let arr1Count = 0, arr2Count = 0, ans = []
        while (arr1Count != arr1.length && arr2Count != arr2.length) {
            if (arr1[arr1Count] <= arr2[arr2Count]) {
                ans.push(arr1[arr1Count])
                arr1Count++
            } else {
                ans.push(arr2[arr2Count])
                arr2Count++
            }
        }
        
        while (arr1Count != arr1.length) {
            ans.push(arr1[arr1Count])
            arr1Count++
        }

        while (arr2Count != arr2.length) {
            ans.push(arr2[arr2Count])
            arr2Count++
        }

        return ans
    }

    const orderedArray1 = [], orderedArray2 = []
    inorder (root1, orderedArray1)
    inorder (root2, orderedArray2)
    return merge(orderedArray1, orderedArray2)
};