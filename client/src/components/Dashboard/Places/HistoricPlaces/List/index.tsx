// Context.
import { useHistoricPlacesContext } from "@context/HistoricPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Place from "../../Place";

// Styles.
import { SList, SListContainer } from "./styles";

export default function List(): JSX.Element {
  const {
    state: { historicPlaces },
  } = useHistoricPlacesContext();

  const { t } = useTranslation();

  if (Boolean(historicPlaces.length)) {
    return (
      <SListContainer>
        <SList>
          {historicPlaces.map((place: any, i: any) => (
            <Place
              place={place}
              key={place.id}
              isVisible={true}
              testID={`historicPlaceButton-${i}`}
            />
          ))}
        </SList>
      </SListContainer>
    );
  }

  return <p>{t("Dashboard.Places.HistoricPlaces.List.p_1")}</p>;
}
