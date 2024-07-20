class Accountspage{
    Logout() {

        cy.get('a[title="My Account"]').click() // Click the My Account link


        // Find and click the logout button within the dropdown menu 
        cy.get('ul[class="dropdown-menu dropdown-menu-right"]').contains("Logout").should('be.visible').click();    
    }
    Login(){
        cy.get('a[title="My Account"]').click() // Click the My Account link


        // Find and click the logout button within the dropdown menu 
        cy.get('ul[class="dropdown-menu dropdown-menu-right"]').contains("Register").should('be.visible').click();  
        
        //click on Login
        cy.xpath('//p/a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
        
        //Enter Login details and click login button.
        cy.get('input[name="email"]').type('bussinesskaran6@gmail.com')
        cy.get('input[name="password"]').type('Karan@123')
        cy.get('input[class="btn btn-primary"]').click();
    }

}    


export default new Accountspage();