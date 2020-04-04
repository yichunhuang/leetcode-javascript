/*
Floyd Algorithm
Time Complexity O(V^3)
Space Complexity O(V^2)
適合用在 dense graph

這個演算法就是每一次新增一個中繼點 k 去更新兩點之間的最短距離
切記 k loop 一定要在外層
不然會發生別的點還沒更新，i = 1, j = 2 的最短距離卻已經被決定不會再相對應更新的問題
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    const matrix = new Array(n)
    for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n)
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i == j) {
          matrix[i][j] = matrix[j][i] = 0
        } else {
          matrix[i][j] = matrix[j][i] = Number.MAX_SAFE_INTEGER
        }
      }
    }

    for (let i = 0; i < edges.length; i++) {
      const v1 = edges[i][0]
      const v2 = edges[i][1]
      const e = edges[i][2]
      matrix[v1][v2] = matrix[v2][v1] = e
    }

    for (let k = 0; k < n; k++) {
      for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
          if (matrix[i][j] > matrix[i][k] + matrix[k][j]) {
            matrix[i][j] = matrix[j][i] = matrix[i][k] + matrix[k][j]
          }
        }
      }
    }

    function numberOfValidNeighbor (distanceOfNeighbor){
      return distanceOfNeighbor.reduce((sum, current) => {
        return sum + ((current <= distanceThreshold) ? 1 : 0)
      }, 0)
    }

    const ansMatrix = matrix.map(arr => numberOfValidNeighbor(arr))
    return ansMatrix.lastIndexOf(Math.min(...ansMatrix))
};
