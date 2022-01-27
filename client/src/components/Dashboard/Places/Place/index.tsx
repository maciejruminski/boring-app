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

export default function Place({
  place: { id, name, rating },
  getPlaceDetails,
}: any): JSX.Element {
  return (
    <SPlace>
      <SButton onClick={() => getPlaceDetails(id)}>
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
