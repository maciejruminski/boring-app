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

    // The user searches for parks within 1km.
    checkIfListExists("1000", "amusement_park");

    // Then the user tries searching for bars within 650m.
    checkIfListExists("650", "bar");

    // Finally the user tries searching for libraries within 15km.
    checkIfListExists("15000", "library");
  });
});
