class SearchResultsPage {
    addToCart() {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search&search=HP')
        cy.get('div[class="button-group"]').should('be.visible');
    
        // Find the "Add to Cart" button using a more flexible selector
        cy.get('div[class="button-group"]')
          .first()
          .find('button:contains("Add to Cart")')
          .should('be.visible')
          .click();
    }
  
    goToShoppingCart() {
      //click on cart and checkout
    cy.get('button[id="button-cart"]').click();
    cy.get('button[class="btn btn-inverse btn-block btn-lg dropdown-toggle"]').click()

    //find checkout button and click
    cy.get('a:contains("Checkout")').click();
    
    }
  }
  
  export default new SearchResultsPage();