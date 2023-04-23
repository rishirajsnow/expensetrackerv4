import CategoryManager from "./CategoryManager";
import StateManager from "./StateManager";
import StoreAdapter from "./StoreAdapter";
import ExpenseManager from "./ExpenseManager";
class LifeCycleManager {
    constructor() {        
    }
    initModels() {
        this.statemanager = new StateManager();
        this.storeadapter = new StoreAdapter();
        this.categorymanager = new CategoryManager(this.statemanager);
        this.expensemanager = new ExpenseManager(this.statemanager);
        this.statemanager.addStore(this.storeadapter);
        this.statemanager.addUpstream(this.storeadapter);
        this.statemanager.init();
        this.categorymanager.fetchCategories();
        this.expensemanager.fetchExpenses();
    }

    initViews(node, view) {
        const obj = new view(node, {
            categoryModel: this.categorymanager,
            expenseModel: this.expensemanager
        });
        this.statemanager.addSubscriber(obj);
        return obj;

    }
    getStateManager() {
        return this.statemanager;
    }
    getCategoryManager() {
        return this.categorymanager;
    }
    
    getExpenseManager() {
        return this.expensemanager;
    }
}

export default LifeCycleManager;