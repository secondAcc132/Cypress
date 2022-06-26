describe ('test all the todos using API', () => {
    
    let id;

    it('should add a todo correctly using the api', () => {
        cy.request('POST','http://localhost:8080/todos',{"name": "todo1", "isComplete": false})
        .then(response => {
            id = response.body.id
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('todo1')
        })
    })

    it('should get a specific todo correctly', () => {
        cy.request('GET', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('todo1')
        })
    })

    it('should update the status of a todo correctly', () => {
        cy.request('PUT','http://localhost:8080/todos/' + id, {"name": "todo1", "isComplete": true})
        .then(response=>{
            expect(response.body.isComplete).to.eq(true)
        })
    })

    it('should delete a todo correctly', ()=>{
        cy.request('DELETE','http://localhost:8080/todos/'+id).then(response => {
            expect(response.status).to.eq(200)
        })
    })

    afterEach(()=> {
        cy.visit("/")
    })
})