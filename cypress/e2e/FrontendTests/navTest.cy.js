import { DashboardPage } from "../../page/dashboarPage";
import { LoginPage } from "../../page/loginPage";
import { NavPage } from "../../page/navpage";
import { OrderPage } from "../../page/orderPage";
import { ProductPage } from "../../page/productsPage";

describe("Menus Navigation Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    NavPage.verifyPage();
  });

  it("Verify Home URL", () => {
    NavPage.verifyUrl();
  });

  it("Verify login navigation item", () => {
    NavPage.clickLogin();
    LoginPage.verifyPage();
    LoginPage.verifyUrl();
  });

  it("Verify dashboard navigation item", () => {
    NavPage.clickDashboard();
    DashboardPage.verifyPage();
    DashboardPage.verifyUrl();
  });

  it("Verify products navigation item", () => {
    NavPage.clickProducts();
    ProductPage.verifyPage();
    ProductPage.verifyUrl();
  });

  it("Verify order navigation item", () => {
    NavPage.clickOrders();
    OrderPage.verifyPage();
    OrderPage.verifyUrl();
  });
});
