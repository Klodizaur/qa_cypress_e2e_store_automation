import PageObject from '../PageObject'

class LogInPageObject extends PageObject {

    get userNameField() {
        return cy.get('input[name="loginname"]', { force: true });
    }

    get passwordField() {
        return cy.get('input[name="password"]', { force: true });
    }

    get loginButton() {
        return cy.get('button[title="Login"]');
    }

    login(userName, userPassword) {
        this.userNameField.type(userName);
        this.passwordField.type(userPassword);
        this.loginButton.click();
    }
}

export default LogInPageObject;
