describe('template spec', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5173')
      // add data in localstorage
        cy.window().then((win) => {
            let categories =[
                {
                    id: 'food',
                    name: 'Food'
                },
                {
                    id: 'travel',
                    name: 'Travel'
                },
                {
                    id: 'entertainment',
                    name: 'Entertainment'
                }
            ];

            let expenses = [
                {
                    id: '1',
                    name: 'food',
                    amount: 100,
                    date: '2021-01-01',
                    category: 'food'
                },
                {
                    id: '2',
                    name: 'travel',
                    amount: 200,
                    date: '2021-01-02',
                    category: 'travel'
                },
                {
                    id: '3',
                    name: 'entertainment',
                    amount: 300,
                    date: '2021-01-03',
                    category: 'entertainment'
                }
            ]

            let state = '{"categories":[{"id":"food","name":"Food","color":"#ff0000","icon":"food"},{"id":"transport","name":"Transport","color":"#00ff00","icon":"transport"},{"id":"entertainment","name":"Entertainment","color":"#0000ff","icon":"entertainment"},{"id":"shopping","name":"Shopping","color":"#ffff00","icon":"shopping"},{"id":"health","name":"Health","color":"#00ffff","icon":"health"},{"id":"other","name":"Other","color":"#ff00ff","icon":"other"}],"expenses":[{"name":"myfood","amount":"100","date":"2021-01-01","category":"food","id":"8v2hhjosv4lhn79cp50lpd"}]}';
            win.localStorage.setItem('expense-tracker-state', state)
        })
    })
  
    it('.type() - type into a DOM element', () => {
        cy.get('#expense-name')
            .type('myfood').should('have.value', 'myfood')
    
        cy.get('#expense-amount')
            .type('100').should('have.value', '100')
    
        cy.get('#expense-date')
            .type('2021-01-01').should('have.value', '2021-01-01')
    
        cy.get('#expense-category')
            .select('food').should('have.value', 'food')
    
        // cy.get('#add-expense-form').submit()
    
        // cy.get('#expense-name').should('have.value', '')
        // cy.get('#expense-amount').should('have.value', '')
        // cy.get('#expense-date').should('have.value', '')
        // cy.get('#expense-category').should('have.value', '')
        
    })
  })