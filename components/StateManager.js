class StateManager {
    constructor () {
        this.state = {};
        this.subscribers = [];
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
        this.subscribers.forEach(subscriber => subscriber.setState(this.state));
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

    init() {
        this.state = this.upstream.getState();
    }
}

export default StateManager;