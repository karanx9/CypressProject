class HomePage {
    visit() {
      cy.visit('https://tutorialsninja.com/demo/');
    }
  
    search(product) {
        cy.get('input[class="form-control input-lg"]').type('HP');
        cy.get('button[class="btn btn-default btn-lg"]').click();
    }
}
export default new HomePage();    