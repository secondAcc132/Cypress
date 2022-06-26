// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("addNewToDo", (todo) => {
    cy.get('.todo-input').type(todo + '{enter}')
    if (todo) {
        cy.get('.success').should('be.visible').should('contain.text','Todo Added')
    } else {
        cy.get('.error').should('be.visible').should('contain.text','Please supply a todo item!')
    }
})

Cypress.Commands.add('addDummyTodos', ()=>{
    const todosArray = [
        {
            "name": "Learn Cypress",
            "isComplete": false
        },
        {
            "name": "Build framework",
            "isComplete": true
        },
        {
            "name": "Shopping",
            "isComplete": false
        },
        {
            "name": "Drink coffee",
            "isComplete": true
        }
    ].forEach(todo => {
        cy.request('POST', 'http://localhost:8080/todos', todo).then((response) => {
            expect(response.body).to.have.property('name', todo.name)    
        })
    })
})