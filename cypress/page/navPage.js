export class NavPage {
  static navMenuSelector = "nav>ul";
  static linkLoginSelector = 'nav>ul>li>a[href="/login"]';
  static linkDashboardSelector = 'nav>ul>li>a[href="/dashboard"]';
  static linkProductsSelector = 'nav>ul>li>a[href="/products"]';
  static linkOrdersSelector = 'nav>ul>li>a[href="/orders"]';

  static verifyPage() {
    cy.get(this.navMenuSelector).should("be.visible");
    cy.get(this.linkLoginSelector)
      .should("be.visible")
      .and("have.text", "Login");
    cy.get(this.linkDashboardSelector)
      .should("be.visible")
      .and("have.text", "Dashboard");
    cy.get(this.linkProductsSelector)
      .should("be.visible")
      .and("have.text", "Products");
    cy.get(this.linkOrdersSelector)
      .should("be.visible")
      .and("have.text", "Orders");
  }

  static clickLogin() {
    cy.get(this.linkLoginSelector).click();
  }

  static clickDashboard() {
    cy.get(this.linkDashboardSelector).click();
  }

  static clickProducts() {
    cy.get(this.linkProductsSelector).click();
  }

  static clickOrders() {
    cy.get(this.linkOrdersSelector).click();
  }

  static verifyUrl() {
    cy.url().should("include", "localhost:3000");
  }
}
