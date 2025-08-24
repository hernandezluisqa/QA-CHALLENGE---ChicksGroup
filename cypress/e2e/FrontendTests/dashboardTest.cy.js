import { DashboardPage } from "../../page/dashboarPage";
import { NavPage } from "../../page/navpage";

describe("Dashboard Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    NavPage.verifyPage();
    NavPage.clickDashboard();
  });

  it("should display the dashboard title and welcome message", () => {
    DashboardPage.verifyPage();
  });

  it("should have the correct URL", () => {
    DashboardPage.verifyUrl();
  });
});
