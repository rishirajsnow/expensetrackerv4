import { Chart } from 'chart.js/auto';
class PieChartView {
    constructor(element, models) {
        this.element = element;
        this.models = models;
        this.chart = null;
    }

    notify() {
        this.render();
    }

    render() {
        const categories = this.models.categoryModel.getCategories();
        const expenses = this.models.expenseModel.getExpenses();
        const data = [];
        const labels = [];
        categories.forEach(category => {
            const categoryExpenses = expenses.filter(expense => expense.category === category.id);
            const total = categoryExpenses.reduce((acc, cur) => acc + Number(cur.amount), 0);
            data.push(total);
            labels.push(category.name);
        });
        const config = {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Expense by Category',
                    data: data,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {}
        };
        if (this.chart) {
            this.chart.destroy();
        }
        // this.chart = new PieChart(this.element, config);
        this.chart = new Chart(this.element, config);
    }
}

export default PieChartView;