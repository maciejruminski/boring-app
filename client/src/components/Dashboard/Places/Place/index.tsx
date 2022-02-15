// Context.
import useDetailsContext from "@context/Details/useDetailsContext";

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
import StarIconPath from "@images/star.svg";
import ArrowIconPath from "@images/right-arrow.svg";

export default function Place({ place, isVisible }: any): JSX.Element {
  const { name, rating } = place;
  const numberOfStars = [...new Array(5)];
  const {
    actions: { showDetails },
  } = useDetailsContext();

  return (
    <SPlace isVisible={isVisible}>
      <SButton onClick={() => showDetails(place)}>
        <SName>{name}</SName>
        <SBottom>
          <SStars>
            <SStarsContainer ratingWidth={rating * 20}>
              {numberOfStars.map((el, key) => (
                <SStar
                  src={StarIconPath}
                  aria-hidden="true"
                  alt="Star icon"
                  key={key}
                />
              ))}
            </SStarsContainer>
            <SStarsContainer ratingWidth={rating * 20}>
              {numberOfStars.map((el, key) => (
                <SStar
                  src={StarIconPath}
                  aria-hidden="true"
                  alt="Star icon"
                  key={key}
                />
              ))}
            </SStarsContainer>
          </SStars>
          <SArrowContainer>
            <SArrow
              src={ArrowIconPath}
              aria-hidden="true"
              alt="Arrow righ icon"
            />
          </SArrowContainer>
        </SBottom>
      </SButton>
    </SPlace>
  );
}
