
// Using BFS

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null;

    const map = new Map();
    const queue = [node];

    map.set(node,{val : node.val , neighbors : []});

    while(queue.length){
        const current = queue.shift();
        for(let neighbor of current.neighbors){
            if(!map.has(neighbor)){
                map.set(neighbor , {val : neighbor.val , neighbors : []});
                queue.push(neighbor);
            }
            map.get(current).neighbors.push(map.get(neighbor));
        }
    }
    return map.get(node);
};


// Usind DFS

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    const map = new Map();

    var dfs = function (current) {

        if (map.has(current)) return map.get(current);

        const clone = { val: current.val, neighbors: [] };
        map.set(current, clone);

        for (let neighbor of current.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }

        return clone
    }

    return dfs(node);


};