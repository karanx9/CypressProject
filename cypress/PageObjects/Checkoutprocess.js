class CheckoutPage {
    continueBilling() {
      //Complete the Checkout process by adding details 
    cy.get('input[id="button-account"]').should('be.visible').click();
    
    //Enter deatils using html elements. 
    cy.get('input[name="firstname"]').type('Karan',{force: true});
    cy.get('input[name="lastname"]').type('Soni')
    //email
    cy.get('input[id="input-payment-email"]').should('be.visible').type('sdxdjhbdhvbs@gmail.com');

    //Number
    cy.get('input[name="telephone"]').type('9403343224',{ force: true })
    //password and confirm password
    cy.get('input[id="input-payment-password"]').should('be.visible').type('Karan@123')
    cy.get('input[id="input-payment-confirm"]').type('Karan@123',{ force: true })

    //Address
    cy.get('input[name="address_1"]').type('Gajanan nagar',{ force: true })

    //City 
    cy.get('input[name="city"]').type('Aurangabad',{ force: true })
    
    //postalcode
    cy.get('input[name="postcode"]').type('431001',{ force: true })

    //selecting zone
    cy.get('select[id="input-payment-zone"]').select('Aberdeen');

    //agree terms
    cy.get('input[name="agree"]').check().should('be.checked');

    //click continue.
    cy.get('input[id="button-register"]').should('be.visible').click({ force: true });

    //Click on continue
    cy.get('input[id="button-shipping-address"]').should('be.visible').click()

    //Click on continue
    cy.get('input[id="button-shipping-method"]').should('be.visible').click();
    
    //Click on continue
    cy.get('input[name="agree"]').check().should('be.checked');
    
    //Click on continue
    cy.get('input[id="button-payment-method"]').should('be.visible').click();
    
    //Click on confirm order and successfull message should be display.
    cy.get('input[id="button-confirm"]').click();

    //click on continue
    cy.xpath('//div/p/a[@href="https://tutorialsninja.com/demo/index.php?route=account/account"]').click();
  }


}    
export default new CheckoutPage();