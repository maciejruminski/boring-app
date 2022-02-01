// Functions.
import { useEffect } from "react";

// Context.
import { useGlobalContext } from "../../../../context";

// Components.
import Place from "../Place";

// Styles.
import { SList, SListContainer, SButton } from "./styles";

export default function PlacesList(): JSX.Element {
  const {
    state: {
      places,
      filters,
      isShowMorePlacesButtonVisible,
      numberOfPlacesToShowAtOnce,
      maximumNumberOfPlaces,
    },
    actions: {
      setNewPlacesByFilters,
      getCurrentPlaceDetails,
      setNumberOfPlacesToShowAtOnce,
      resetNumberOfPlacesToShowAtOnce,
      setNumberOfPlacesButtonVisibility,
    },
  } = useGlobalContext();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setNewPlacesByFilters(filters), []);
  useEffect(
    () => setNumberOfPlacesButtonVisibility(),
    [numberOfPlacesToShowAtOnce, maximumNumberOfPlaces]
  );
  useEffect(() => {
    resetNumberOfPlacesToShowAtOnce();
    console.log(places.length);
  }, [places]);

  if (maximumNumberOfPlaces) {
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

  return <p>Loading...</p>;
}
