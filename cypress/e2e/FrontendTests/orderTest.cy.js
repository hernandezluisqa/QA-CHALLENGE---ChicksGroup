import { NavPage } from "../../page/navpage";
import { OrderPage } from "../../page/orderPage";

describe("Producst Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    NavPage.verifyPage();
    NavPage.clickOrders();
  });

  it("should display the order title", () => {
    OrderPage.verifyPage();
  });

  it("should have the correct URL", () => {
    OrderPage.verifyUrl();
  });
});
