/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('check titles', () => {
    cy.get('[data-testid=title]').should('have.text', 'QUAL É O NÚMERO?');
    cy.get('[data-testid="button-submit"]').should('have.text', 'Enviar');
  });

  it('send value', () => {
    cy.get('[data-testid=input-number]').type('123');
    cy.get('[data-testid="button-submit"]').click();
  });
});
