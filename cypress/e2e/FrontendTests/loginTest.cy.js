import { LoginPage } from "../../page/loginPage";
import { NavPage } from "../../page/navpage";

describe("Login Test", () => {
  let userData;

  beforeEach(() => {
    cy.visit("http://localhost:3000");
    NavPage.verifyPage();
    NavPage.clickLogin();
    LoginPage.verifyPage();

    cy.fixture("userData.json").then(function (data) {
      userData = data;
    });
    cy.log(JSON.stringify(userData));
  });

  it("Validate Login successfully", () => {
    LoginPage.enterCredentials(userData.validUser, userData.validPassword);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Logged in with token: sampletoken");
  });

  it("Validate cannot login with valid username and invalid password", () => {
    LoginPage.enterCredentials(userData.validUser, userData.invalidPassword);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with valid username and null password", () => {
    LoginPage.enterCredentials(userData.validUser);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with invalid username and valid password", () => {
    LoginPage.enterCredentials(userData.invalidUser, userData.validPassword);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with invalid username and invalid password", () => {
    LoginPage.enterCredentials(userData.invalidUser, userData.invalidPassword);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with invalid username and null password", () => {
    LoginPage.enterCredentials(userData.invalidUser);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with null username and valid password", () => {
    LoginPage.enterCredentials("", userData.validPassword);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with null username and invalid password", () => {
    LoginPage.enterCredentials("", userData.invalidPassword);
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });

  it("Validate cannot login with null username and null password", () => {
    LoginPage.enterCredentials("");
    LoginPage.clickLogin();
    LoginPage.verifyMessage("Login failed");
  });
});
