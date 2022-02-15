// Functions.
import { useEffect, useRef } from "react";

// Controllers.
import GoogleMap from "@controllers/GoogleMap/GoogleMap";

// Styles.
import { SMap, SMapText, SButton } from "./styles";

// Context.
import { useDetailsContext } from "@context/Details";
import { useTranslation } from "react-i18next";

let map: GoogleMap;

export default function Map(): JSX.Element {
  const {
    state: {
      currentPlace: {
        geometry: { location },
      },
      isCurrentPlaceModalOpen,
    },
  } = useDetailsContext();

  const { t } = useTranslation();

  const geoIsNotSupported = !navigator.geolocation;

  if (geoIsNotSupported) {
    // TO DO - jakis blad jak uzytkownik nie zgodzi sie na lokalizowanie
    throw new Error("Geolocation is not supported by your browser!");
  }

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    map = new GoogleMap(ref);
  }, []);

  useEffect(() => {
    if (isCurrentPlaceModalOpen) {
      map.createRoute(`${location.lat},${location.lng}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentPlaceModalOpen, location]);

  return (
    <>
      <SMap ref={ref}>
        <SMapText>{t("Dashboard.Places.CurrentPlace.Map.SMapText")}</SMapText>
      </SMap>
      {isCurrentPlaceModalOpen && (
        <SButton
          text={t("Dashboard.Places.CurrentPlace.Map.SButton__text")}
          onClickHandler={() =>
            window.open(
              map.createGoogleMapLink(`${location.lat},${location.lng}`),
              "_blank"
            )
          }
        />
      )}
    </>
  );
}
