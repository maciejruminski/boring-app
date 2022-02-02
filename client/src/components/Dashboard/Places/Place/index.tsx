// Styles.
import {
  SPlace,
  SButton,
  SBottom,
  SName,
  SStars,
  SStarsContainer,
  SStar,
  SArrowContainer,
  SArrow,
} from "./styles";

// Icons.
import StarIconPath from "../../../../images/star.svg";
import ArrowIconPath from "../../../../images/right-arrow.svg";

export default function Place({
  place,
  getCurrentPlaceDetails,
  isVisible,
}: any): JSX.Element {
  const { name, rating } = place;
  const numberOfStars = [...new Array(5)];

  return (
    <SPlace isVisible={isVisible}>
      <SButton onClick={() => getCurrentPlaceDetails(place)}>
        <SName>{name}</SName>
        <SBottom>
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
          <SArrowContainer>
            <SArrow
              src={ArrowIconPath}
              aria-hidden="true"
              alt="Ikona strzałki skierowanej w prawo"
            />
          </SArrowContainer>
        </SBottom>
      </SButton>
    </SPlace>
  );
}
