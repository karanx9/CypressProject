import HomePage from '../PageObjects/Homepage';
import SearchResultsPage from '../PageObjects/Searchandaddtocart';
import CheckoutPage from '../PageObjects/Checkoutprocess';
import Accountspage from '../PageObjects/Accountpage';


describe('TutorialsNinja E2E Test', () => {
  before(() => {
    cy.fixture('config').then((config) => {
      Cypress.config('baseUrl', config.baseUrl);
    });
  });

  it('Checkout process', () => {
    cy.fixture('config').then((config) => {
      // Search for a product
      HomePage.visit();
      HomePage.search(config.existingProductName);

      // Add to cart and go to shopping cart
      SearchResultsPage.addToCart();
      SearchResultsPage.goToShoppingCart();

      //Continue billing process
      CheckoutPage.continueBilling();

      //Accounts Page
      Accountspage.Logout();
      Accountspage.Login();

      

    });
  });
});      