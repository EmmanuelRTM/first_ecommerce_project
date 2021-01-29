/* eslint-disable no-undef */
describe('Welcome to the login Test',()=>{
    /*it('que existe un texto', ()=>{
        cy.visit('http://localhost:3000/')
        cy.get('#un-p').contains('Parrafo para que se pruebe')
        cy.get('.App-link').contains('Learn React')
    })
    */
    
    it('que exista un formaulario en la pagina principal', ()=>{
        cy.visit('http://localhost:3000/login')
        cy.get('#user').type('mario@gmail.com')
        cy.get('#password').type('1234')
        cy.get('#onLogin').click()
    })
    
    it('No se escribe en el password', ()=>{
        cy.visit('http://localhost:3000/login')
        cy.get('#user').type('usuario')
        cy.get('#onLogin').click()
    })
})