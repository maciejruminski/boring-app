// Context.
import { useHistoricPlacesContext } from "@context/HistoricPlaces";
import { useTranslation } from "react-i18next";

// Styles.
import { SHeading, SNote, SSmallNote } from "./styles";

export default function Heading() {
  const {
    state: { historicPlaces },
  } = useHistoricPlacesContext();

  const numberOfHistoricPlaces = historicPlaces.length;
  const { t } = useTranslation();

  return (
    <>
      <SHeading>
        {t("Dashboard.Places.HistoricPlaces.Heading.SHeading")}
      </SHeading>
      {Boolean(numberOfHistoricPlaces) && (
        <>
          <SSmallNote>
            {t("Dashboard.Places.HistoricPlaces.Heading.SSmallNote", {
              numberOfHistoricPlaces,
            })}
          </SSmallNote>
          <SNote>{t("Dashboard.Places.HistoricPlaces.Heading.SNote")}</SNote>
        </>
      )}
    </>
  );
}
