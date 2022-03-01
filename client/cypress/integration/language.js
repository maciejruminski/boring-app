// Language.
import i18n from "../../src/i18n";

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
