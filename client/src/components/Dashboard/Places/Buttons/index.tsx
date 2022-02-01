// Context.
import { useGlobalContext } from "../../../../context";

// Styles.
import { SNote, SButton, SSecondButton } from "./styles";

export default function Places() {
  const {
    state: {
      currentPlace: { id },
    },
    actions: { getRandomPlaceDetails, setHistoricPlacesModalOn },
  } = useGlobalContext();

  return (
    <>
      <SNote>
        Możesz też sprawdzić miejsca, które już zapisałeś lub wybrać losowo z
        pośród tych, które pojawiły się na podstawie filtrów.
      </SNote>
      <SButton
        onClickHandler={setHistoricPlacesModalOn}
        text="Pokaż miejsca, które zapisałem"
      />
      <SSecondButton
        onClickHandler={() => getRandomPlaceDetails(id)}
        text="Wybierz losowe miejsce"
      />
    </>
  );
}
