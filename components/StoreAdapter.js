const STATE_KEY = "expense-tracker-state";
class StoreAdapter {
   // store and retrieve from localstorage
    getState() {
        const state = localStorage.getItem(STATE_KEY);
        if (state) {
            return JSON.parse(state);
        }
        return null;
    }
   setState(value) {
        localStorage.setItem(STATE_KEY, JSON.stringify(value));
    }
}

export default StoreAdapter;