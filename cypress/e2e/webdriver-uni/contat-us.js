/// <reference types="Cypress" />

describe("Test Conatct Us form via WebdriverUni", () => {
  it("Should be able to submit a succesful submission via Contact Us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name = "first_name"]').type("Satheesh");
    cy.get('[name="last_name"]').type("Chintala");
    cy.get('[name = "email"]').type("satichintala@gmail.com");
    cy.get('[name="message"]').type("This is the Contact form");
    cy.get('[type = "submit"]').click();
  });

  it("Should not be able to submit a succesful submission via Contact Us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name = "first_name"]').type("Satheesh");
    cy.get('[name="last_name"]').type("Chintala");
    cy.get('[name="message"]').type("This is the Contact form");
    cy.get('[type = "submit"]').click();
    //test
  });
});
