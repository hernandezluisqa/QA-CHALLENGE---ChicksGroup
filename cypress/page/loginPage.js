export class LoginPage {
  static titleSelector = "div>h2";
  static userInputSelector = 'input[placeholder="Username"]';
  static passwordInputSelector = 'input[placeholder="Password"]';
  static loginButtonSelector = "div button";
  static messageSelector = "div p";

  static verifyPage() {
    cy.get(this.titleSelector).should("be.visible").and("have.text", "Login");
    cy.get(this.userInputSelector).should("be.visible");
    cy.get(this.passwordInputSelector).should("be.visible");
    cy.get(this.loginButtonSelector)
      .should("be.visible")
      .and("have.text", "Login");
    cy.get(this.messageSelector).should("not.be.visible");
  }

  static verifyUrl() {
    cy.url().should("include", "/login");
  }

  static enterCredentials(username, password) {
    if (username) {
      // solo escribe si username NO es null/undefined/empty
      cy.get(this.userInputSelector).clear().type(username);
    } else {
      cy.get(this.userInputSelector).clear(); // limpia el campo pero no escribe
    }

    if (password) {
      // solo escribe si password NO es null/undefined/empty
      cy.get(this.passwordInputSelector).clear().type(password);
    } else {
      cy.get(this.passwordInputSelector).clear(); // limpia el campo pero no escribe
    }
  }

  static clickLogin() {
    cy.get(this.loginButtonSelector).click();
  }

  static verifyMessage(expectedMessage) {
    cy.get(this.messageSelector)
      .should("be.visible")
      .and("have.text", expectedMessage);
  }
}
