/**
 * @param {number} capacity
 */

var Node = function (key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.remove = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

LRUCache.prototype.insert = function (node) {
    let first = this.head.next;
    node.next = first
    node.prev = this.head;

    this.head.next = node;
    first.prev = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);

    this.remove(node);
    this.insert(node);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.val = value;

        this.remove(node);
        this.insert(node);
    } else {
        let newNode = new Node(key, value);
        this.map.set(key, newNode);
        this.insert(newNode);

        if (this.map.size > this.capacity) {
            let LRU = this.tail.prev;

            this.remove(LRU);
            this.map.delete(LRU.key);
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */