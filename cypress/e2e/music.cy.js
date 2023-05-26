describe('Test New Song', () => {
  it('Add new song and submit', () => {
    cy.visit('http://localhost:3000/')
    // add song
    cy.get('input[data-cy="add-title"]').focus().type('XYZ')
    cy.get('input[data-cy="add-artist"]').focus().type('Kids')
    cy.get('input[data-cy="add-album"]').focus().type('Gravity')
    cy.get('input[data-cy="add-release-date"]').focus().type('2023-05-25')
    cy.get('input[data-cy="add-genre"]').focus().type('Heavy Metal')
    cy.get('input[data-cy="add-running-time"]').focus().type('350')
    cy.get('button[data-cy="add-btn"]').click()
    cy.wait(1000);   
    cy.get('input[data-cy="search-input"]').type('XYZ')
    cy.wait(1000);   
    // check if new song has been added/assert that it exist in songlist
    cy.get('table[data-cy="song-table"]').contains('XYZ').should('exist');
    cy.wait(1000);  
    // delete new song from list
    
    cy.contains('XYZ').should('exist')
  });
});

describe('Search/filter Test', () => {
  it('Search for new song', () => {
    cy.visit('http://localhost:3000/')

    cy.get('input[data-cy="search-input"]').type('XYZ')
    cy.wait(1000);   
    // check if new song has been added/assert that it exist in songlist
    cy.get('table[data-cy="song-table"]').contains('XYZ').should('exist');
    cy.wait(1000);  
  
  });
});

describe('Test New Song', () => {
  it('Add new song and submit', () => {
    cy.visit('http://localhost:3000/')
    // delete new song from list
    
    cy.get('table[data-cy="song-table"]').contains('tr','XYZ').contains('Delete Song').click();
  });
});