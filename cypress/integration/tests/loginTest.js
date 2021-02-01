/* eslint-disable no-undef */
describe('Welcome to the login Test',()=>{
    

    it('No se escribe la info necesaria', ()=>{
    cy.visit('http://localhost:3000/login')
    cy.get('#user').type('usuario')
    cy.get('#onLogin').click()
})
    
    it('Se ingresa con el admin', ()=>{
        cy.visit('http://localhost:3000/login')
        cy.get('#user').type('mario@gmail.com')
        cy.get('#password').type('1234')
        cy.get('#onLogin').click()
    })

    it('Se agrega al carrito el primer producto de la lista', ()=>{
        cy.visit('http://localhost:3000/product/5fbc19a65a3f794d72471163')
        cy.get(':nth-child(13)').click()
        cy.get('[type="submit"]').click()
    })

})