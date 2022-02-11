// Functions.
import { useEffect } from "react";

// Context.
import usePlacesContext from "../../../../context/Places/usePlacesContext";
import useFiltersAndPlacesContext from "../../../../context/FiltersAndPlaces/useFiltersAndPlacesContext";

// Components.
import Place from "../Place";

// Styles.
import { SList, SListContainer, SButton } from "./styles";

export default function List(): JSX.Element {
  const {
    state: {
      isShowMorePlacesButtonVisible,
      numberOfPlacesToShowAtOnce,
      maximumNumberOfPlaces,
    },
    actions: {
      setMaximumNumberOfPlaces,
      setNumberOfPlacesToShowAtOnce,
      resetNumberOfPlacesToShowAtOnce,
      setNumberOfPlacesButtonVisibility,
    },
  } = usePlacesContext();

  const {
    state: {
      places,
      // isShowMorePlacesButtonVisible,
      // numberOfPlacesToShowAtOnce,
      // maximumNumberOfPlaces,
    },
    actions: {
      // setNumberOfPlacesToShowAtOnce,
      // resetNumberOfPlacesToShowAtOnce,
      // setNumberOfPlacesButtonVisibility,
    },
  } = useFiltersAndPlacesContext();

  // console.log(maximumNumberOfPlaces);

  useEffect(
    () => setNumberOfPlacesButtonVisibility(places),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [numberOfPlacesToShowAtOnce, maximumNumberOfPlaces]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    resetNumberOfPlacesToShowAtOnce();
    setMaximumNumberOfPlaces(places.length);
  }, [places]);

  // if (Boolean(maximumNumberOfPlaces)) {
  // do sprawdzenia
  if (maximumNumberOfPlaces) {
    return (
      <SListContainer>
        <SList>
          {places.map((place: any, i: number) => (
            <Place
              place={place}
              key={place.id}
              isVisible={i < numberOfPlacesToShowAtOnce ? true : false}
            />
          ))}
        </SList>
        {isShowMorePlacesButtonVisible && (
          <SButton
            onClickHandler={setNumberOfPlacesToShowAtOnce}
            text="Wczytaj kolejne miejsca"
          />
        )}
      </SListContainer>
    );
  }

  return (
    <p>
      Niestety, ale na podstawie podanych filtrów nie znaleziono żadnych miejsc.
    </p>
  );
}
