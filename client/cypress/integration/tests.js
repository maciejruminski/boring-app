describe("Login", () => {
  it("Email checking", () => {
    cy.visit("http://localhost:3000");

    let errorText;

    // Empty email
    errorText = /please fill in this field\./i;
    cy.findByTestId("emailSubmit").click();

    cy.findByText(errorText);

    // Wrong email;
    errorText =
      /please include an '@' in the email address\. 'wrong\-email\.gmail\.com' is missing an '@'\./i;
    cy.findByTestId("email").type("wrong-email.gmail.com");

    cy.findByText(errorText);

    // Email with multiple @ sing.
    errorText = /a part following '@' should not contain the symbol '@'\./i;
    cy.findByTestId("email").clear();
    cy.findByTestId("email").type("multiple@@@gmail.com");

    cy.findByText(errorText);

    // Success.
    cy.findByTestId("email").clear();
    cy.findByTestId("email").type("good-email@gmail.com");
    cy.findByTestId("email-error").should("not.exist");
    cy.findByTestId("emailSubmit").click();
  });

  it("Password checking", () => {
    let errorText;

    // Resend password
    const successText = /password has been sent!/i;
    cy.findByRole("button", { name: /resend one\-time password/i }).click();

    cy.findByText(successText);

    // Empty password
    errorText = /please fill in this field\./i;
    cy.findByRole("button", { name: /login/i }).click();

    cy.findByText(errorText);

    // Too short password
    errorText = /password must contain exactly 6 digits\./i;
    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type("123");
    cy.findByRole("button", { name: /login/i }).click();

    cy.findByText(errorText);

    // Wrong password
    const wrongPassword = "abc123";

    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type(wrongPassword);
    cy.findByRole("button", { name: /login/i }).click();

    cy.findByText(/password is incorrect, please double check your email\./i);

    // Valid password
    const validPassword = "$ecret";

    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type(validPassword);
    cy.findByRole("button", { name: /login/i }).click();
  });
});

describe("Filters", () => {
  it("Filters checking", () => {
    let initialPlacesLength = 0;

    cy.findByRole("button", {
      name: /show filters/i,
    })
      .click({ force: true })
      // When some places are found
      .then(() => {
        cy.findByRole("combobox", { name: /distance/i }).select("3000");
        cy.findByTestId("filter")
          .click({ force: true })
          .then(() => {
            const list = cy.findByRole("list");
            if (list) {
              list.get("li").should("have.length.gt", initialPlacesLength);
            }
          });
      })
      // No places
      .then(() => {
        cy.findByRole("button", {
          name: /show filters/i,
        })
          .click({ force: true })
          .then(() => {
            const wrongKeyword = "abcde";
            cy.findByRole("textbox", { name: /keyword/i }).type(wrongKeyword);
          });
      })
      .then(() => {
        cy.findByTestId("filter")
          .click({ force: true })
          .then(() => {
            cy.findByRole("list").should("not.exist");
            cy.findByText(
              /sorry, but no places were found based on the filters you provided\./i
            ).should("exist");
          });
      });
  });
});

// To do:
// Check historic places (saving/removing functionality).
// Check language switching.
// Check current place.
