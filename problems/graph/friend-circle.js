var findCircleNum = function(M) {
    let ans = 0
    let isVisited = []
    for (let i = 0; i < M[0].length; i++) {
      if (isVisited[i] != 1) {
        ans ++
        dfs (i)
      }
    }

    function dfs (currentIdx) {
      for (let i = 0; i < M[0].length; i++) {
        if (isVisited[i]) continue
        if (isVisited[i] != 1 && M[currentIdx][i]) {
          isVisited[i] = 1
          dfs(i)
        }
      }
    }
    return ans
};
