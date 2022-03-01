// Language.
import i18n from "../../src/i18n";

describe("Login", () => {
  it("Email checking", () => {
    cy.visit("http://localhost:3000");

    // let errorText;

    // // Empty email
    // errorText = /please fill in this field\./i;
    // cy.findByTestId("emailSubmit").click();

    // cy.findByText(errorText);

    // // Wrong email;
    // errorText =
    //   /please include an '@' in the email address\. 'wrong\-email\.gmail\.com' is missing an '@'\./i;
    // cy.findByTestId("email").type("wrong-email.gmail.com");

    // cy.findByText(errorText);

    // // Email with multiple @ sing.
    // errorText = /a part following '@' should not contain the symbol '@'\./i;
    // cy.findByTestId("email").clear();
    // cy.findByTestId("email").type("multiple@@@gmail.com");

    // cy.findByText(errorText);

    // Success.
    cy.findByTestId("email").clear();
    cy.findByTestId("email").type("good-email@gmail.com");
    cy.findByTestId("email-error").should("not.exist");
    cy.findByTestId("emailSubmit").click();
  });

  it("Password checking", () => {
    // let errorText;

    // // Resend password
    // const successText = /password has been sent!/i;
    // cy.findByRole("button", { name: /resend one\-time password/i }).click();

    // cy.findByText(successText);

    // // Empty password
    // errorText = /please fill in this field\./i;
    // cy.findByRole("button", { name: /login/i }).click();

    // cy.findByText(errorText);

    // // Too short password
    // errorText = /password must contain exactly 6 digits\./i;
    // cy.findByTestId("signUpPassword").clear();
    // cy.findByTestId("signUpPassword").type("123");
    // cy.findByRole("button", { name: /login/i }).click();

    // cy.findByText(errorText);

    // // Wrong password
    // const wrongPassword = "abc123";

    // cy.findByTestId("signUpPassword").clear();
    // cy.findByTestId("signUpPassword").type(wrongPassword);
    // cy.findByRole("button", { name: /login/i }).click();

    // cy.findByText(/password is incorrect, please double check your email\./i);

    // Valid password
    const validPassword = "$ecret";

    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type(validPassword);
    cy.findByRole("button", { name: /login/i }).click();
  });
});

describe("Filters", () => {
  it("Filters checking", () => {
    const initialPlacesLength = 0;

    const findPlacesByFilters = (distance, type) => {
      return cy
        .findByTestId("showFilters")
        .click()
        .then(() => {
          cy.findByTestId("distance").select(distance);
          cy.findByTestId("types").select(type);
          cy.findByTestId("filter")
            .click({ force: true })
            .then(() => {
              cy.get("body").then(($body) => {
                if ($body.find("ul[data-testid='placesList']").length > 0) {
                  cy.findByTestId("placesList")
                    .get("li")
                    .should("have.length.gt", initialPlacesLength);
                } else {
                  cy.findByTestId("placesList").should("not.exist");
                }
              });
            });
        });
    };

    findPlacesByFilters("1000", "amusement_park");

    cy.wait(1000);

    findPlacesByFilters("650", "bar");

    cy.wait(1000);

    findPlacesByFilters("3000", "library");
  });
});

// To do:
// Check historic places (saving/removing functionality).
// Check language switching.
// Check current place.
