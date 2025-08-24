export class OrderPage {
  static titleSelector = "div>h2";
  static ordersListSelector = "div>ul";

  static verifyPage() {
    cy.get(this.titleSelector)
      .should("be.visible")
      .and("have.text", "Order List");
    //cy.get(this.ordersListSelector).should("be.visible");
  }

  static verifyUrl() {
    cy.url().should("include", "/orders");
  }
}
