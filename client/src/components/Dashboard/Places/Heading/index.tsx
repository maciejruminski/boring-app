// Context.
import { usePlacesContext } from "@context/Places";
import { useTranslation } from "react-i18next";

// Styles.
import { SHeading, SSmallNote, SNote } from "./styles";

export default function Heading() {
  const {
    state: { maximumNumberOfPlaces },
  } = usePlacesContext();

  const { t } = useTranslation();

  return (
    <>
      <SHeading>{t("Dashboard.Places.Heading.SHeading")}</SHeading>
      {Boolean(maximumNumberOfPlaces) && (
        <>
          <SSmallNote>
            {t("Dashboard.Places.Heading.SSmallNote", {
              maximumNumberOfPlaces,
            })}
          </SSmallNote>
          <SNote>{t("Dashboard.Places.Heading.SNote")}</SNote>
        </>
      )}
    </>
  );
}
