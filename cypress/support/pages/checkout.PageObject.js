import PageObject from '../PageObject'

class CheckoutPageObject extends PageObject {

    get checkoutButton() {
        return cy.get('a#cart_checkout2').should('be.visible').click();
    }

    get confirmOrderButton() {
        return cy.get('[onclick="confirmSubmit();"]').should('be.visible').click();
    }

    get orderSuccessMessage() {
        return cy.contains('Your Order Has Been Processed!').should('be.visible');
    }
}

export default CheckoutPageObject;
