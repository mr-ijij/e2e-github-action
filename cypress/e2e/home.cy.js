describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    cy.contains('Hello World');
  })
})