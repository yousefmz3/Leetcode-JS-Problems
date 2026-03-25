// Design an EventEmitter class. This interface is similar (but with some differences) 
// to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter
// should allow for subscribing to events and emitting them.

// Example 1:

// Input: 
// actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
// values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
// Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]

// Solution 1

class EventEmitter {
    constructor() {
        this.events = new Map()
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        const callbacks = this.events.get(eventName);
        callbacks.push(callback)

        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) return [];

        const callbacks = this.events.get(eventName);
        const result = [];

        for (let cb of callbacks) {
            result.push(cb(...args));
        }
        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

// Solution 2

class EventEmitter {
    constructor() {
        this.events = new Map()
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, new Set());
        }
        const callbacks = this.events.get(eventName);
        callbacks.add(callback)

        return {
            unsubscribe: () => {
                callbacks.delete(callback)
                }
            }
        };

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) return [];

        const callbacks = this.events.get(eventName);
        const result = [];

        for (let cb of callbacks) {
            result.push(cb(...args));
        }
        return result;
    }
}


/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */


