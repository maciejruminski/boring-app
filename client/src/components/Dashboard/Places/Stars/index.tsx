// Styles.
import { SStars, SStarsContainer, SStar } from "./styles";

export default function Stars({ rating }: { rating: number }): JSX.Element {
  const numberOfStars = [...new Array(5)];

  const StarsContainer = () => {
    return (
      <SStarsContainer ratingWidth={rating * 20}>
        {numberOfStars.map((el, key) => (
          <SStar key={key} />
        ))}
      </SStarsContainer>
    );
  };

  return (
    <SStars>
      {StarsContainer()}
      {StarsContainer()}
    </SStars>
  );
}
