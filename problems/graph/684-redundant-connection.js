// disjoint-set data structure
var findRedundantConnection = function(edges) {
    const disjoint_set = new UnionFind(edges.length);
    for(let edge of edges) {
        const [u,v] = edge
        if(!disjoint_set.union(u, v)) {
            return edge
        }
    }
    return []
}


class UnionFind {
  constructor (size) {
    this.parent = new Array(size)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
    }
    this.rank = new Array (size)
  }

  find(x) {
    if (this.parent[x] != x) {
      this.parent[x] = this.find(this.parent[x])
    }

    return this.parent[x]
  }

  union(x, y) {
    let x_root = this.find(x)
    let y_root = this.find(y)
    if (x_root == y_root) {
      return false
    }
    else if (this.rank[x_root] < this.rank[y_root]) {
      this.parent[x_root] = y_root
    }
    else if (this.rank[x_root] > this.rank[y_root]) {
      this.parent[y_root] = x_root
    }
    else {
      this.parent[y_root] = x_root
      this.rank[x_root] ++
    }
    return true
  }
}

