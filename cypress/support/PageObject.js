class PageObject {
    constructor(url) {
      this.url = 'https://automationteststore.com';
    }
  
    visit(url) {
      cy.visit(url || this.url);
    }
  }
  
export default PageObject