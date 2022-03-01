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
