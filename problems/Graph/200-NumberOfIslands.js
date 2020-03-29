var numIslands = function(grid) {
    var ans = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          ans += 1
          dfs(i, j)
        }
      }
    }

    function dfs (row, column) {
      if ( row < 0 || row >= grid.length || column < 0 || column >= grid[0].length || grid[row][column] == 0 ) return

      if (grid[row][column] == 1) grid[row][column] = 0

      dfs (row-1, column)
      dfs(row+1, column)
      dfs(row, column-1)
      dfs(row, column+1)

    }
    return ans
};
