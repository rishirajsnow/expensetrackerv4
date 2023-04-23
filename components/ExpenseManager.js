const STATE_KEY = "expenses";
class ExpenseManager {
    constructor(statemanager) {
        this.expenses = [];
        this.statemanager = statemanager;
    }
    
    addExpense(expense) {
        this.expenses.push(expense);
        this.statemanager.setState(STATE_KEY, this.expenses);
    }
    
    getExpenses() {
        return this.expenses;
    }

    deleteEexpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.statemanager.setState(STATE_KEY, this.expenses);
    }

    updateExpense(id, expense) {
        this.expenses = this.expenses.map(e => {
            if (e.id === id) {
                return expense;
            }
            return e;
        });
        this.statemanager.setState(STATE_KEY, this.expenses);
    }

    fetchExpenses() {
        const expenses = this.statemanager.getState(STATE_KEY);
        if (expenses) {
            this.expenses = expenses;
        }
    }
}

export default ExpenseManager;