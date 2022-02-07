// Functions.
import { useEffect, useRef } from "react";

// Controllers.
import Helper from "../../../../../controllers/Helper";

// Styles.
import { SMap, SMapText, SButton } from "./styles";

// Context.
import { useGlobalContext } from "../../../../../context";

export default function Map({
  targetLocation,
}: {
  targetLocation: any;
}): JSX.Element {
  const {
    state: {
      map: {
        map,
        origin,
        directionsService,
        directionsDisplay,
        destinationMarker,
        googleAppLink,
      },
      modals: { isCurrentPlaceModalOpen },
    },
    actions: { setCurrentPlaceGoogleAppLink, initializeMap },
  } = useGlobalContext();

  const geoIsNotSupported = !navigator.geolocation;

  if (geoIsNotSupported) {
    throw new Error("Geolocation is not supported by your browser!");
  }

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!map) {
      initializeMap(ref);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    if (origin) {
      setCurrentPlaceGoogleAppLink(
        targetLocation.lat,
        targetLocation.lng,
        origin?.lat(),
        origin?.lng()
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetLocation]);

  useEffect(() => {
    if (isCurrentPlaceModalOpen) {
      if (
        directionsService &&
        directionsDisplay &&
        origin &&
        destinationMarker
      ) {
        Helper.calculateAndDisplayRoute(
          directionsService,
          directionsDisplay,
          origin.lat() + "," + origin.lng(),
          targetLocation.lat + "," + targetLocation.lng,
          destinationMarker
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentPlaceModalOpen, targetLocation]);

  return (
    <>
      <SMap ref={ref}>
        <SMapText>Trwa wczytywanie mapy</SMapText>
      </SMap>

      {isCurrentPlaceModalOpen && (
        <SButton
          text="Odpal trasę na Google Map"
          onClickHandler={() => window.open(googleAppLink, "_blank")}
        />
      )}
    </>
  );
}
