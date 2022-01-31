// Styles.
import {
  SPlace,
  SButton,
  SName,
  SStars,
  SStarsContainer,
  SStar,
} from "./styles";

// Icons.
import StarIconPath from "../../../../images/star.svg";

export default function Place({ place, getCurrentPlaceDetails }: any): JSX.Element {
  const { name, rating } = place;

  return (
    <SPlace>
      <SButton onClick={() => getCurrentPlaceDetails(place)}>
        <SName>{name}</SName>
        <SStars>
          <SStarsContainer ratingWidth={rating * 20}>
            <SStar src={StarIconPath} aria-hidden="true" alt="Ikona gwiazdki" />
            <SStar src={StarIconPath} aria-hidden="true" alt="Ikona gwiazdki" />
            <SStar src={StarIconPath} aria-hidden="true" alt="Ikona gwiazdki" />
            <SStar src={StarIconPath} aria-hidden="true" alt="Ikona gwiazdki" />
            <SStar src={StarIconPath} aria-hidden="true" alt="Ikona gwiazdki" />
          </SStarsContainer>
        </SStars>
      </SButton>
    </SPlace>
  );
}
