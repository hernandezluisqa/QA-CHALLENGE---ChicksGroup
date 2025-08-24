export class DashboardPage {
  static titleSelector = "div>h2";
  static messageSelector = "div>p";

  static verifyPage() {
    cy.get(this.titleSelector)
      .should("be.visible")
      .and("have.text", "Dashboard");
    cy.get(this.messageSelector)
      .should("be.visible")
      .and("contain.text", "Welcome");
  }

  static verifyUrl() {
    cy.url().should("include", "/dashboard");
  }
}
