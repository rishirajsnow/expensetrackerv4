// import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import AddExpense from './views/AddExpense.js'
import LifeCycleManager from './components/LifeCycleManager'
document.querySelector('#app').innerHTML = `
  <div>
    <header>Expense Tracker</header>
    <div id="add-expense"></div>
  </div>
`


const lifeCycleManager = new LifeCycleManager();
lifeCycleManager.init();
let models = {
  categoryModel: lifeCycleManager.getCategoryManager(),
  expenseModel: lifeCycleManager.getExpenseManager()
}
const addExpense = new AddExpense(document.getElementById("add-expense"), models);
addExpense.setView();
// setupCounter(document.querySelector('#counter'))
