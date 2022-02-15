// Context.
import { useDetailsContext } from "@context/Details";
import { useTranslation } from "react-i18next";

// Styles.
import {
  SNote,
  SHeading,
  SAddress,
  SOpenNow,
  SStars,
  SStarsContainer,
  SStar,
} from "./styles";

// Icons.
import StarIconPath from "@images/star.svg";

export default function Details() {
  const {
    state: { currentPlace, isCurrentPlaceModalOpen },
  } = useDetailsContext();

  const { name, rating, website, openNow, vicinity } = currentPlace;
  const numberOfStars = [...new Array(5)];
  const { t } = useTranslation();

  if (isCurrentPlaceModalOpen) {
    return (
      <>
        <SNote>{t("Dashboard.Places.CurrentPlace.Info.SNote_1")}</SNote>
        {name && <SHeading>{name}</SHeading>}
        {vicinity && <SAddress>{vicinity}</SAddress>}
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
