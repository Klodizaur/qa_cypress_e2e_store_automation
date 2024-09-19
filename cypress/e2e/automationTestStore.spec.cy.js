import HomePageObject from "../support/pages/home.PageObject";
import ProductPageObject from "../support/pages/product.PageObject";
import CheckoutPageObject from "../support/pages/checkout.PageObject";
import LogInPageObject from "../support/pages/login.PageObject";

const homePage = new HomePageObject();
const productPage = new ProductPageObject();
const checkoutPage = new CheckoutPageObject();
const loginPage = new LogInPageObject();

const userName = 'mojSuperLogin';
const userPassword = 'mojeSuperHaslo';

describe('Buying product on the online store', () => {
    
    beforeEach(() => {
        homePage.visit();
    });

    it('Should search for product', () => {
        homePage.searchForProduct('Benefit Bella Bamba');
    });

    it('Should add the product to cart', () => {
        homePage.searchForProduct('Benefit Bella Bamba');
        productPage.addToCartButton;
    });

    it('Should proceed to checkout', () => {
        homePage.searchForProduct('Benefit Bella Bamba');
        productPage.addToCartButton;
        checkoutPage.checkoutButton;
    });

    it('Should login', () => {
        homePage.searchForProduct('Benefit Bella Bamba');
        productPage.addToCartButton;
        checkoutPage.checkoutButton;
        loginPage.login(userName, userPassword);
    });

    it('Should confirm the order', () => {
        homePage.searchForProduct('Benefit Bella Bamba');
        productPage.addToCartButton;
        checkoutPage.checkoutButton;
        loginPage.login(userName, userPassword);
        checkoutPage.confirmOrderButton;
    });

    it('Should display confirmation message', () => {
        homePage.searchForProduct('Benefit Bella Bamba');
        productPage.addToCartButton;
        checkoutPage.checkoutButton;
        loginPage.login(userName, userPassword);
        checkoutPage.confirmOrderButton;
        checkoutPage.orderSuccessMessage;
    });

});
