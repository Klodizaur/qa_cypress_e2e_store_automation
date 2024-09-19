import PageObject from '../PageObject'

class HomePageObject extends PageObject {

    visit() {
        cy.visit('https://automationteststore.com');
    }

    get searchBar() {
        return cy.get('input[placeholder="Search Keywords"]').should('be.visible');
    }

    searchForProduct(productName) {
        this.searchBar.type(`${productName}{enter}`);
    }
}

export default HomePageObject;
