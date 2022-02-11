// Libraries.
import { Loader } from "@googlemaps/js-api-loader";

// Map options.
import options from "./options";

// Icons.
import personIconPath from "../../images/user.svg";
import markerIconPath from "../../images/marker.svg";

export default class GoogleMap {
  map: google.maps.Map<HTMLDivElement> | undefined;
  origin: google.maps.LatLng | undefined;
  directionsService: google.maps.DirectionsService | undefined;
  directionsRenderer: google.maps.DirectionsRenderer | undefined;
  destinationMarker: google.maps.Marker | undefined;

  constructor(ref: React.RefObject<HTMLDivElement>) {
    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    });

    navigator.geolocation.getCurrentPosition((success: GeolocationPosition) =>
      loader.load().then(() => {
        this.createMap(ref, success);
        this.createDirectionsService();
        this.createDirectionsRenderer();
        this.addOriginMarker();
        this.addDestinationMarker();
      })
    );
  }

  createMap(
    ref: React.RefObject<HTMLDivElement>,
    success: GeolocationPosition
  ) {
    this.origin = new google.maps.LatLng(
      success.coords.latitude,
      success.coords.longitude
    );

    options.center = { lat: this.origin.lat(), lng: this.origin.lng() };

    this.map = new google.maps.Map(ref?.current as HTMLDivElement, options);
  }

  createDirectionsService() {
    this.directionsService = new google.maps.DirectionsService();
  }

  createDirectionsRenderer() {
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      map: this.map,
      suppressMarkers: true,
    });
  }

  addOriginMarker() {
    new google.maps.Marker({
      position: this.origin,
      map: this.map,
      icon: personIconPath,
    });
  }

  addDestinationMarker() {
    this.destinationMarker = new google.maps.Marker({
      map: this.map,
      icon: markerIconPath,
    });
  }

  createRoute(destination: string) {
    this.directionsService?.route(
      {
        origin: this.origin,
        destination,
        avoidTolls: true,
        avoidFerries: true,
        avoidHighways: false,
        provideRouteAlternatives: false,
        travelMode: google.maps.TravelMode.WALKING,
      },
      (
        response: google.maps.DirectionsResult,
        status: google.maps.DirectionsStatus
      ) => {
        if (status === google.maps.DirectionsStatus.OK) {
          const route = response.routes[0].legs[0];
          const destinationMarkerPosition = new google.maps.LatLng(
            route.end_location.lat(),
            route.end_location.lng()
          );

          this.destinationMarker?.setPosition(destinationMarkerPosition);

          this.directionsRenderer?.setOptions({
            polylineOptions: {
              strokeColor: "#52a2e7",
              strokeOpacity: 0.5,
              strokeWeight: 5,
            },
          });

          // @ts-ignore
          this.directionsRenderer?.setDirections({ routes: [] });
          this.directionsRenderer?.setDirections(response);
        }
      }
    );
  }

  createGoogleMapLink(destination: string) {
    return `https://www.google.com/maps/dir/${destination}/${this.origin?.lat()},${this.origin?.lng()}/data=!3m1!4b1!4m2!4m1!3e2`;
  }
}
