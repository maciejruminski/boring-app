// Functions.
import { useEffect, useRef, useCallback } from "react";

// Context.
import { usePlacesContext } from "@context/Places";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Place from "../Place";

// Styles.
import { SList, SListContainer, SListInnerContainer, SButton } from "./styles";

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
    state: { places, currentLocation },
  } = useFiltersAndPlacesContext();

  useEffect(
    () => setNumberOfPlacesButtonVisibility(places),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [numberOfPlacesToShowAtOnce, maximumNumberOfPlaces]
  );

  useEffect(() => {
    resetNumberOfPlacesToShowAtOnce();
    setMaximumNumberOfPlaces(places.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);

  const useHookWithRefCallback = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const setRef = useCallback((listInnerContainer: HTMLDivElement) => {
      if (listInnerContainer) {
        const list = listInnerContainer?.children[0];

        if (listInnerContainer) {
          setTimeout(
            () => (listInnerContainer.style.height = list?.clientHeight + "px"),
            0
          );
        }
      }

      ref.current = listInnerContainer;
    }, []);

    return [ref, setRef];
  };

  const [listContainerRef, setListContainerRef] = useHookWithRefCallback();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (
      listContainerRef &&
      // @ts-ignore
      listContainerRef.current &&
      listRef &&
      listRef.current
    ) {
      // @ts-ignore
      listContainerRef.current.style.height =
        listRef.current.clientHeight + "px";
        console.log('height changed!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfPlacesToShowAtOnce, places]);

  const { t } = useTranslation();

  if (Boolean(maximumNumberOfPlaces) && currentLocation) {
    return (
      <SListContainer>
        <SListInnerContainer ref={setListContainerRef} id="listInnerContainer">
          <SList ref={listRef} data-testid="placesList">
            {places.map((place: any, i: number) => (
              <Place
                place={place}
                key={place.id}
                isVisible={i < numberOfPlacesToShowAtOnce ? true : false}
                testID={`placeButton-${i}`}
              />
            ))}
          </SList>
        </SListInnerContainer>
        {isShowMorePlacesButtonVisible && (
          <SButton
            onClickHandler={setNumberOfPlacesToShowAtOnce}
            text={t("Dashboard.Places.List.SButton__text")}
          />
        )}
      </SListContainer>
    );
  }

  return (
    <p>
      {currentLocation
        ? t("Dashboard.Places.List.p_1")
        : t("Dashboard.Places.List.p_1--noLocation")}
    </p>
  );
}
