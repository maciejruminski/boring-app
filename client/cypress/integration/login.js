describe("Login", () => {
  it("Email checking", () => {
    cy.visit("http://localhost:3000");

    let errorText;

    // The user clicks on button without filling an input.
    errorText = /please fill in this field\./i;
    cy.findByTestId("emailSubmit").click();

    cy.findByText(errorText);

    // After receiving an error the user types an email but makes some mistakes.
    errorText =
      /please include an '@' in the email address\. 'wrong\-email\.gmail\.com' is missing an '@'\./i;
    cy.findByTestId("email").type("wrong-email.gmail.com");

    cy.findByText(errorText);

    errorText = /a part following '@' should not contain the symbol '@'\./i;
    cy.findByTestId("email").clear();
    cy.findByTestId("email").type("multiple@@@gmail.com");

    cy.findByText(errorText);

    // After some tries, the user finally types valid email.
    cy.findByTestId("email").clear();
    cy.findByTestId("email").type("good-email@gmail.com");
    cy.findByTestId("email-error").should("not.exist");
    cy.findByTestId("emailSubmit").click();
  });

  it("Password checking", () => {
    let errorText;

    // The user has problem and can't find an email with one-time password,
    // so he clicks on resend button.
    const successText = /password has been sent!/i;
    cy.findByRole("button", { name: /resend one\-time password/i }).click();

    cy.findByText(successText);

    // The user clicks on button without filling an input.
    errorText = /please fill in this field\./i;
    cy.findByRole("button", { name: /login/i }).click();

    cy.findByText(errorText);

    // The user types too short password.
    errorText = /password must contain exactly 6 digits\./i;
    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type("123");
    cy.findByRole("button", { name: /login/i }).click();

    cy.findByText(errorText);

    // The user types wrong password.
    const wrongPassword = "abc123";

    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type(wrongPassword);
    cy.findByRole("button", { name: /login/i }).click();

    cy.findByText(/password is incorrect, please double check your email\./i);

    // After some tries, the user finally types valid password.
    const validPassword = "$ecret";

    cy.findByTestId("signUpPassword").clear();
    cy.findByTestId("signUpPassword").type(validPassword);
    cy.findByRole("button", { name: /login/i }).click();
  });
});
