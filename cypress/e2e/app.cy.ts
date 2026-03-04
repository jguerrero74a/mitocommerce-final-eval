describe('App Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('debe mostrar el mensaje "Hello world"', () => {
    cy.get('h1').should('contain.text', 'Hello world');
  });
});
