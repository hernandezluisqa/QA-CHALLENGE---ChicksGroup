export class ProductPage {
  static titleSelector = "div>h2";
  static productsListSelector = "div>ul";

  static verifyPage() {
    cy.get(this.titleSelector)
      .should("be.visible")
      .and("have.text", "Product List");
    //cy.get(this.productsListSelector).should("be.visible");
  }

  static verifyUrl() {
    cy.url().should("include", "/products");
  }
}
