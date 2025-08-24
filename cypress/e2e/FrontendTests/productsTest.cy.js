import { NavPage } from "../../page/navpage";
import { ProductPage } from "../../page/productsPage";

describe("Products Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    NavPage.verifyPage();
    NavPage.clickProducts();
  });

  it("should display the Product title", () => {
    ProductPage.verifyPage();
  });

  it("should have the correct URL", () => {
    ProductPage.verifyUrl();
  });
});
