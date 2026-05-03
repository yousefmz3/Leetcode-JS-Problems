
var validTree = function(n, edges) {
    
    if (edges.length !== n - 1) return false;

    const graph = Array.from({ length: n }, () => []);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Set();

    function dfs(node) {
        if (visited.has(node)) return;

        visited.add(node);

        for (let neighbor of graph[node]) {
            dfs(neighbor);
        }
    }

    dfs(0);

    return visited.size === n;
};