describe('Add expense from input tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173')
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

    cy.get('#add-expense-form').submit()

    cy.get('#expense-name').should('have.value', '')
    cy.get('#expense-amount').should('have.value', '')
    cy.get('#expense-date').should('have.value', '')
    cy.get('#expense-category').should('have.value', '')
    cy.window().then((win) => {
      let state = JSON.parse(win.localStorage.getItem('expense-tracker-state'))
      expect(state.expenses.length).to.equal(1)
      expect(state.expenses[0].name).to.equal('myfood')
      expect(state.expenses[0].amount).to.equal("100")
      expect(state.expenses[0].date).to.equal('2021-01-01')
      expect(state.expenses[0].category).to.equal('food')
    })
  })
})