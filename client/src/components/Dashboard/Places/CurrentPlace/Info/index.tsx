// Context.
import { useDetailsContext } from "@context/Details";

// Styles.
import {
  SNote,
  SHeading,
  SAddress,
  SOpenNow,
  SStars,
  SStarsContainer,
  SStar,
} from "./styles";

// Icons.
import StarIconPath from "../../../../../images/star.svg";

export default function Details() {
  const {
    state: { currentPlace, isCurrentPlaceModalOpen },
  } = useDetailsContext();

  const { name, rating, website, openNow, vicinity } = currentPlace;

  const numberOfStars = [...new Array(5)];

  if (isCurrentPlaceModalOpen) {
    return (
      <>
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
            <a href={website} target="_blank" rel="noreferrer">
              tutaj
            </a>{" "}
            aby przejść na stronę internetową.
          </SNote>
        )}
      </>
    );
  }

  return <></>;
}
