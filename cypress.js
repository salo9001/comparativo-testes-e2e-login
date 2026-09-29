describe('Teste de Autenticação', () => { 
  it('deve realizar login com sucesso', () => { 
    // Navega até a página 
    cy.visit('https://exemplo.com/login'); 
    // Interage com os elementos utilizando seletores CSS diretos 
    cy.get('#username').type('usuario'); 
    cy.get('#password').type('senha'); 
    cy.get('#login-button').click(); 
    // Asserção integrada que aguarda automaticamente 
    cy.get('#welcome-message').should('be.visible'); 
  }); 
});
