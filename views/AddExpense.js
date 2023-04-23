class AddExpense {
    constructor(element, models) {
        this.element = element;
        this.categoryModel = models.categoryModel;
        this.expenseModel = models.expenseModel;
    }
    addExpense() {
        //get expense name, amount, date and category from form
        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = document.getElementById("expense-amount").value;
        const expenseDate = document.getElementById("expense-date").value;
        const expenseCategory = document.getElementById("expense-category").value;
        //create expense object

        //generate a random id based on name seed
        const expense = {
            name: expenseName,
            amount: expenseAmount,
            date: expenseDate,
            category: expenseCategory,
            id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        }
        //add expense to expense manager
        this.expenseModel.addExpense(expense);
        this.clearForm();
    }
    //clear form values
    clearForm() {
        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amount").value = "";
        document.getElementById("expense-date").value = "";
        document.getElementById("expense-category").value = "";
    }
    getExpenses(){
        let x= this.expenseModel.getExpenses();
         let total=x.reduce((acc, cur) => acc + Number(cur.amount), 0);
        return total;
    }
    
    getCategories() {
        //get categories from category manager and render options html
        const categories = this.categoryModel.getCategories();
        return categories.map(category => {
            return `<option value="${category.id}">${category.name}</option>`
        }).join("");
    }
   
    
    setView() {
        this.element.innerHTML = this.getViewHTML();
        this.bindEvents();
    }
    //button onclick call addExpense function'
    
    bindEvents() {
        document.getElementById("add-expense-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const text = document.getElementById('expense-name');
            const amount = document.getElementById('expense-amount');
            const date = document.getElementById("expense-date");
            const category=document.getElementById("expense-category");
            const total=document.getElementById("total");
            //Validation of input
            if (text.value.trim() === '' || amount.value.trim() === '') {
                alert('Please add a text and amount');
            } 
            if (date.value.trim() === '') {
                alert('Please enter date');
            } 
            if (category.value.trim() === '') {
                alert('Please category of expense');
            } 
            this.addExpense();
            //Update total expenses post each update
            total.innerText=`dd Expense: $ ${this.getExpenses()}(Total Expences)`;
            
        })
    }
    //show view function that returns the html of adding expense form
    getViewHTML() {
        return `
        <div class="container">
        <b id="total">Add Expense: $ ${this.getExpenses()}(Total Expences)</b>
            <div class="row">
                <div class="col-md-6">
                    <form id="add-expense-form">
                        <div class="form-group">
                            <label for="expense-name">Expense Name</label>
                            <input type="text" class="form-control" id="expense-name" placeholder="Enter Expense Name">
                        </div>
                        <div class="form-group">
                            <label for="expense-amount">Expense Amount</label>
                            <input type="number" class="form-control" id="expense-amount" placeholder="Enter Expense Amount">
                        </div>
                        <div class="form-group">
                            <label for="expense-date">Expense Date</label>
                            <input type="date" class="form-control" id="expense-date" placeholder="Enter Expense Date">
                        </div>
                        <div class="form-group">
                            <label for="expense-category">Expense Category</label>
                            <select type="category" class="form-control" id="expense-category">
                                <option value="">Select Category</option>
                                ${this.getCategories()}
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Add Expense</button>
                    </form>
                </div>
            </div>
        </div>
        `
    }
}

export default AddExpense;