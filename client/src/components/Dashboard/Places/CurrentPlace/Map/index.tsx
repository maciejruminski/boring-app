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
      isGeolocationAllowed,
      isCurrentPlaceModalOpen,
      currentPlace: {
        geometry: { location },
      },
    },
    actions: { setGeolocationAsAllowed },
  } = useDetailsContext();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(() => setGeolocationAsAllowed());
  }, []);

  const { t } = useTranslation();
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

  const mapText = isGeolocationAllowed
    ? t("Dashboard.Places.CurrentPlace.Map.SMapText--allowed")
    : t("Dashboard.Places.CurrentPlace.Map.SMapText--disallowed");

  return (
    <>
      <SMap ref={ref}>
        <SMapText>{mapText}</SMapText>
      </SMap>

      {isCurrentPlaceModalOpen && isGeolocationAllowed && (
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
