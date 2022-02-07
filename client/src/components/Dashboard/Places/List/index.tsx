// Functions.
import { useEffect } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Place from "../Place";

// Styles.
import { SList, SListContainer, SButton } from "./styles";

export default function List(): JSX.Element {
  const {
    state: {
      places,
      isShowMorePlacesButtonVisible,
      numberOfPlacesToShowAtOnce,
      maximumNumberOfPlaces,
    },
    actions: {
      getCurrentPlaceDetails,
      setNumberOfPlacesToShowAtOnce,
      resetNumberOfPlacesToShowAtOnce,
      setNumberOfPlacesButtonVisibility,
    },
  } = useGlobalContext();

  useEffect(
    () => setNumberOfPlacesButtonVisibility(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [numberOfPlacesToShowAtOnce, maximumNumberOfPlaces]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => resetNumberOfPlacesToShowAtOnce(), [places]);

  if (Boolean(maximumNumberOfPlaces)) {
    return (
      <SListContainer>
        <SList>
          {places.map((place: any, i) => (
            <Place
              place={place}
              getCurrentPlaceDetails={getCurrentPlaceDetails}
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
