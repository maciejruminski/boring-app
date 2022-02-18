// Context.
import useDetailsContext from "@context/Details/useDetailsContext";

// Styles.
import {
  SPlace,
  SButton,
  SBottom,
  SName,
  SArrowContainer,
  SArrow,
} from "./styles";

// Components.
import Stars from "../Stars";

// Icons.
import ArrowIconPath from "@images/right-arrow.svg";

export default function Place({ place, isVisible }: any): JSX.Element {
  const { name, rating } = place;
  const {
    actions: { showDetails },
  } = useDetailsContext();

  return (
    <SPlace isVisible={isVisible}>
      <SButton onClick={() => showDetails(place)}>
        <SName>{name}</SName>
        <SBottom>
          <Stars rating={rating} />
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
