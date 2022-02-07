// Functions.
import { useEffect } from "react";

// Controllers.
import Helper from "../../../../controllers/Helper";

// Context.
import { useGlobalContext } from "../../../../context";

// Styles.
import {
  SDetails,
  SClose,
  SNote,
  SHeading,
  SAddress,
  SOpenNow,
  SStars,
  SStarsContainer,
  SStar,
  SButton,
  SSecondButton,
} from "./styles";

// Icons.
import StarIconPath from "../../../../images/star.svg";
import closeIconPath from "../../../../images/close.svg";

// Components.
import Map from "./Map";

export default function Details() {
  const {
    state: {
      places,
      currentPlace,
      modals: { isCurrentPlaceModalOpen, isHistoricPlacesModalOpen },
    },
    actions: {
      setCurrentPlaceModalOff,
      getRandomPlaceDetails,
      addHistoricPlace,
      removeHistoricPlace,
    },
  } = useGlobalContext();

  const {
    id,
    name,
    rating,
    website,
    isSavedAsHistoric,
    reviews,
    openNow,
    phone,
    vicinity,
    geometry: { location },
  } = currentPlace;

  const numberOfStars = [...new Array(5)];
  useEffect(
    () =>
      Helper.makeBodyUnscrollable(
        isCurrentPlaceModalOpen || isHistoricPlacesModalOpen
      ),
    [isCurrentPlaceModalOpen]
  );

  const Info = (): JSX.Element => {
    return (
      <>
        <SClose
          onClickHandler={setCurrentPlaceModalOff}
          text="Submit"
          icon={closeIconPath}
        />
        <SNote>Wybrano lokalizację:</SNote>
        {name && <SHeading>{name}</SHeading>}
        {vicinity && <SAddress>{vicinity}</SAddress>}
        <SStars>
          <SStarsContainer ratingWidth={rating * 20}>
            {numberOfStars.map((el, key) => (
              <SStar
                src={StarIconPath}
                aria-hidden="true"
                alt="Ikona gwiazdki"
                key={key}
              />
            ))}
          </SStarsContainer>
          <SStarsContainer ratingWidth={rating * 20}>
            {numberOfStars.map((el, key) => (
              <SStar
                src={StarIconPath}
                aria-hidden="true"
                alt="Ikona gwiazdki"
                key={key}
              />
            ))}
          </SStarsContainer>
        </SStars>
        {openNow && <SOpenNow>Teraz Otwarte</SOpenNow>}
        {website && (
          <SNote>
            Kliknij{" "}
            <a href={website} target="_blank">
              tutaj
            </a>{" "}
            aby przejść na stronę internetową.
          </SNote>
        )}
      </>
    );
  };

  const Buttons = (): JSX.Element => {
    return (
      <>
        {isSavedAsHistoric ? (
          <SButton
            onClickHandler={() => removeHistoricPlace(id)}
            text="Usuń lokację z historii"
          />
        ) : (
          <SButton
            onClickHandler={() => addHistoricPlace(currentPlace)}
            text="Zapisz lokację w historii"
          />
        )}

        {!isHistoricPlacesModalOpen && (
          <SSecondButton
            text="Losuj inne miejsce"
            onClickHandler={() => getRandomPlaceDetails(places, id)}
          />
        )}
      </>
    );
  };

  return (
    <SDetails isModalOpen={isCurrentPlaceModalOpen}>
      {isCurrentPlaceModalOpen && Info()}
      <Map targetLocation={location} />
      {isCurrentPlaceModalOpen && Buttons()}
    </SDetails>
  );
}
