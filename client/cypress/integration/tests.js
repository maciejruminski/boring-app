// Language.
import i18n from "../../src/i18n";

const findPlacesByFilters = (distance, type) => {
  return cy
    .findByTestId("showFilters")
    .click()
    .then(() => {
      cy.findByTestId("distance").select(distance);
      cy.findByTestId("types").select(type);
      cy.findByTestId("filter").click({ force: true });
    });
};

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
    const checkIfListExists = (distance, type) => {
      cy.findByTestId("showFilters")
        .click()
        .then(() => {
          cy.findByTestId("distance").select(distance);
          cy.findByTestId("types").select(type);
          cy.findByTestId("filter").click({ force: true });
        });

      cy.wait(500);

      cy.get("body").then(($body) => {
        if ($body.find("ul[data-testid='placesList']").length > 0) {
          cy.findByTestId("placesList")
            .get("li")
            .should("have.length.gt", initialPlacesLength);
        } else {
          cy.findByTestId("placesList").should("not.exist");
        }
      });
    };

    // checkIfListExists("1000", "amusement_park");
    // checkIfListExists("650", "bar");
    // checkIfListExists("15000", "library");
  });
});

describe("Language", () => {
  it("Language switcher checking", () => {
    const englishTranslations = i18n.store.data.en.translation;

    // In the beggining the user should notice headings in English.
    cy.findByTestId("previewHeading").should(
      "have.text",
      englishTranslations["Dashboard.Filters.Preview.SHeading"]
    );

    cy.findByTestId("placesHeading").should(
      "have.text",
      englishTranslations["Dashboard.Places.Heading.SHeading"]
    );

    // Then the user may want to switch to Polish by clicking on 'PL' button.
    cy.findByTestId("pl").click();

    // Then the user should be able to see headings in Polish.
    const polishTranslations = i18n.store.data.pl.translation;

    cy.findByTestId("previewHeading").should(
      "have.text",
      polishTranslations["Dashboard.Filters.Preview.SHeading"]
    );

    cy.findByTestId("placesHeading").should(
      "have.text",
      polishTranslations["Dashboard.Places.Heading.SHeading"]
    );
  });
});

describe("Historic Places", () => {
  it("Historic places saving/removing functionality checking", () => {
    // In the beggining the user should not notice the
    // button which shows modal with historic places.
    // This buttons should be visible only if there are saved placed in database.
    cy.findByTestId("showHistoricPlaces").should("not.exist");

    // Then the user searches for bars in the area.
    cy.findByTestId("showFilters")
      .click()
      .then(() => {
        cy.findByTestId("distance").select("10000");
        cy.findByTestId("types").select("bar");
        cy.findByTestId("filter").click({ force: true });
      });

    cy.wait(500);

    cy.get("body").then(($body) => {
      if ($body.find("ul[data-testid='placesList']").length > 0) {
        // Then the user click on first place to get details.
        cy.findByTestId("placeButton-0").click({ force: true });

        // The user likes the bar and save it as historic place.
        cy.findByTestId("historicPlaceSavingButton").click({ force: true });
        cy.findByTestId("closeButton").click({ force: true });

        // Now, the user should be able to see the button which shows historic places modal.
        cy.findByTestId("showHistoricPlaces").should("exist");

        // The user click on the button.
        cy.findByTestId("showHistoricPlaces").click({ force: true });

        // The user should be able to see previously saved place.
        cy.findByTestId("historicPlaceButton-0").click({ force: true });

        // The user has chosen to remove the place from database.
        cy.findByTestId("historicPlaceSavingButton").click({
          force: true,
        });
        cy.findByTestId("closeButton").click({ force: true });

        // Now, the user should not be able again to see the button which shows historic places modal.
        cy.findByTestId("showHistoricPlaces").should("not.exist");
      }
    });
  });
});

