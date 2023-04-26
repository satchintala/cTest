/// <reference types="Cypress" />

describe("Test Conatct Us form via Automation Test Store", () => {
  it("Should be able to submit a succesful submission via Contact Us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("Satheesh");
    cy.get("#ContactUsFrm_email").type("satichintala@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you provide additional discount on bulk orders?"
    );
    cy.get(".col-md-6 > .btn").click();
  });
});
