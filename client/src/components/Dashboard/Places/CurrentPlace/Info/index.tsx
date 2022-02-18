// Context.
import { useDetailsContext } from "@context/Details";
import { useTranslation } from "react-i18next";

// Components.
import Stars from "../../Stars";

// Styles.
import { SNote, SHeading, SAddress, SOpenNow } from "./styles";

export default function Details() {
  const {
    state: { currentPlace, isCurrentPlaceModalOpen },
  } = useDetailsContext();

  const { name, rating, website, openNow, vicinity } = currentPlace;
  const { t } = useTranslation();

  if (isCurrentPlaceModalOpen) {
    return (
      <>
        <SNote>{t("Dashboard.Places.CurrentPlace.Info.SNote_1")}</SNote>
        {name && <SHeading>{name}</SHeading>}
        {vicinity && <SAddress>{vicinity}</SAddress>}
        <Stars rating={rating} />
        {openNow && (
          <SOpenNow>
            {t("Dashboard.Places.CurrentPlace.Info.SOpenNow")}
          </SOpenNow>
        )}
        {website && (
          <SNote
            dangerouslySetInnerHTML={{
              __html: t("Dashboard.Places.CurrentPlace.Info.SNote_2", {
                website,
              }),
            }}
          ></SNote>
        )}
      </>
    );
  }

  return <></>;
}
