import PageObject from '../PageObject'

class ProductPageObject extends PageObject {

    get addToCartButton() {
        return cy.get('a.cart').should('be.visible').click();
    }
}

export default ProductPageObject;
