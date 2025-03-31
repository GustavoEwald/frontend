/// <reference types="cypress" />

describe('Testes de inclusão, edição e exclusão de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deverá preencher os campos de novo contato e cadastrar-lo', () => {
        cy.get('[type="text"]').type('Meu Nome Completo')
        cy.get('[type="email"]').type('meuemail@servidordeemail')
        cy.get('[type="tel"]').type('99999999999')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > :last-child li').eq(0).should('have.text', 'Meu Nome Completo')
        cy.get('.sc-iAEyYk > :last-child li').eq(1).should('have.text', '99999999999')
        cy.get('.sc-iAEyYk > :last-child li').eq(2).should('have.text', 'meuemail@servidordeemail')
    })

    it('Deverá alterar o "nome", "telefone" e "email" do ultimo contato', () => {
        cy.get(':last-child > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type(' Editado')
        cy.get('[type="email"]').type('.com.br')
        cy.get('[type="tel"]').type('0')
        cy.get('.alterar').click()
        cy.get('.sc-iAEyYk > :last-child li').eq(0).should('have.text', 'Meu Nome Completo Editado')
        cy.get('.sc-iAEyYk > :last-child li').eq(1).should('have.text', '999999999990')
        cy.get('.sc-iAEyYk > :last-child li').eq(2).should('have.text', 'meuemail@servidordeemail.com.br')
    })

    it('Deverá excluir o ultimo contato da lista', () => {
        cy.get(':last-child() > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk > :last-child').should('not.have.text', 'Meu Nome Completo Editado999999999990meuemail@servidordeemail.com.brDeletarEditar')
    })
})