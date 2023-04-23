import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import AddExpense from './views/AddExpense.js'
import LifeCycleManager from './components/LifeCycleManager'
import PieChartView from './views/PieChartView'

//two divs left and right 

document.querySelector('#app').innerHTML = `
  <div>
    <header>Expense Tracker</header>
    <div id="add-expense"></div>
    <canvas id="pie-chart"></canvas>
  </div>
`


const lifeCycleManager = new LifeCycleManager();
lifeCycleManager.initModels();
const addExpense = lifeCycleManager.initViews(document.getElementById("add-expense"), AddExpense);
const addPieChart = lifeCycleManager.initViews(document.getElementById("pie-chart"), PieChartView);
addExpense.setView();
addPieChart.render();
// setupCounter(document.querySelector('#counter'))
