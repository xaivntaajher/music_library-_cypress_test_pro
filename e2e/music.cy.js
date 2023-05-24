describe('Test New Song', () => {
  it('Add new song and submit', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[data-cy="add-title"]').focus()
    cy.get('input[data-cy="add-artist"]').focus()
    cy.get('input[data-cy="add-album"]').focus()
    cy.get('input[data-cy="add-release-date"]').focus()
    cy.get('input[data-cy="add-genre"]').focus()
    cy.get('input[data-cy="add-running-time"]').focus()
    
  
  
  })
})