/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);

    for (let [course, pre] of prerequisites) {
        graph[pre].push(course);
    }

    const state = new Array(numCourses).fill(0);

    var dfs = function (node) {
        if (state[node] === 1) return false;
        if (state[node] === 2) return true;

        state[node] = 1;

        for (let neighbor of graph[node]) {
            if (!dfs(neighbor)) return false;
        }

        state[node] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) { 
        if(!dfs(i)) return false;
    }

    return true;
};