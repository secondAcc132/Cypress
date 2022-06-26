///<reference types="Cypress" />

describe('Todo testing', ()=>{

    beforeEach(()=>{
        cy.visit("/")
    })

    it.only('should add a new todo correctly', ()=>{
        cy.intercept('POST','http://localhost:8080/todos').as('postRequest')
        cy.addNewToDo("First Todo")
        cy.wait('@postRequest').then(xhr => {
            expect(xhr.request.body.name).to.eql("First Todo")
        })
        cy.get('.todo-item').last().should('contain.text','First Todo')
    })

    it('should be able to toggle the status of a todo correctly', ()=>{
        cy.addNewToDo("Second Todo")
        cy.get('.todo-checkbox').check().should('be.checked')
        cy.get('.todo-checkbox').uncheck().should('not.be.checked')
    })

    it('should delete a todo correctly', () => {
        cy.addNewToDo("Third Todo")
        cy.get('.delete-item').click()
    })

    it('should not add an empty todo', ()=>{
        cy.addNewToDo("")
    })

    afterEach(() => {
        cy.get('body').then($el => {
            if($el.find('.delete-item').length > 0) {
                cy.get('.delete-item').click({multiple: true})
            }
        })
    })

})