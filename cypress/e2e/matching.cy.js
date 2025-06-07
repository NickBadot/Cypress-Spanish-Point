describe('Matching Engine Home Page', () => {
  it('Naviagtes to Supported Products and Assets Several Types String Displays', () => {
    cy.visit('https://www.matchingengine.com/')
    cy.get('#burger').click()
    cy.get(':nth-child(1) > .navbar-link').click()
    cy.get('.navbar-dropdown > [href="https://www.matchingengine.com/repertoire-management-module/"]').click()
    cy.get(':nth-child(2) > a > .vc_tta-title-text').click()
    cy.get('.vc_tta-panel-body > .vc_row > :nth-child(2) > .vc_column-inner > :nth-child(1) > .vc_custom_heading').eq(1) // two objects on the page match this structure. we want the second one
    .contains("There are several types of Product Supported:") 
    
  })
})