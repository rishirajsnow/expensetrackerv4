class StateManager {
    constructor () {
        this.state = {};
        this.subscribers = [];
        this.stores = [];
        this.wasUpdated = false;
        this.upstream = null;
    }

    getState(key) {
        if (this.wasUpdated) {
            this.state = this.upstream.getState();
            this.wasUpdated = false;
        }
        return this.state[key];
    }

    setState(key, value) {
        this.state[key] = value;
        this.stores.forEach(store => store.setState(this.state));
        this.subscribers.forEach(subscriber => typeof subscriber.notify === "function" ? subscriber.notify(): console.warn("The subscriber cannot take notifications"));
        this.wasUpdated = true;
    }

    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }

    removeSubscriber(subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    addUpstream(upstream) {
        this.upstream = upstream;
    }

    addStore(store) {
        this.stores.push(store);
    }

    removeStore(store) {
        this.stores = this.stores.filter(s => s !== store);
    }

    init() {
        this.state = this.upstream.getState();
        if (this.state === null) {
            this.state = {};
        }
    }
}

export default StateManager;