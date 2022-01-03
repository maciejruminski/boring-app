import { Loader } from "@googlemaps/js-api-loader";
import styled from "styled-components";

const SMap = styled.div`
  width: 500px;
  height: 500px;
`;

export default function Map(): JSX.Element {
  let map: google.maps.Map;
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  const loader = new Loader({
    apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    // version: "weekly",
  });

  function calculateAndDisplayRoute(
    directionsService: any,
    directionsDisplay: any,
    pointA: any,
    pointB: any,
    travelMode: any,
    marker: any
  ) {
    console.log("route!!");

    let travelModeTest = "DRIVING";

    directionsService.route(
      {
        origin: pointA,
        destination: pointB,
        avoidTolls: true,
        avoidFerries: true,
        avoidHighways: false,
        provideRouteAlternatives: false,
        travelMode,
      },
      function (response: any, status: any) {
        if (status == google.maps.DirectionsStatus.OK) {
          console.log(google.maps.TravelMode);

          // response.request.travelMode= 'WALKING';

          var routewww = response.routes[0].legs[0];

          // console.log(routewww.end_location);

          var latlng = new google.maps.LatLng(
            routewww.end_location.lat(),
            routewww.end_location.lng()
          );

          marker.setPosition(latlng);

          // const marker2 =   new google.maps.Marker({
          //     position: new google.maps.LatLng(
          //       53.464960907469835,
          //       18.739887425618237
          //     ),
          //     map: map,
          //     // icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          // });

          //   new google.maps.Marker({
          //     position: pointB,
          //     title: "point B",
          //     label: "Bs",
          //     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          //     map: map
          // });

          console.log(response);

          directionsDisplay.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  //   let map: google.maps.Map;
  //   const google = window.google;
  //   // let map: any;
  //   console.log(google);

  // function initMap(): void {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }

  // initMap();

  const isNotMobileDevice =
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // if (isNotMobileDevice) {
  //   throw new Error('This app is only for mobile devices!');
  // }

  const geoIsNotSupported = !navigator.geolocation;

  if (geoIsNotSupported) {
    throw new Error("Geolocation is not supported by your browser!");
  }

  const currentPosition = navigator.geolocation.getCurrentPosition(
    (success) =>
      loader.load().then(() => {
        console.log("Map initialized!");
        // map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        //   center: { lat: 53.461460907469835, lng: 18.727277425618237 },
        //   zoom: 17,
        // });

        var pointA = new google.maps.LatLng(
            success.coords.latitude,
            success.coords.longitude
          ),
          pointB = new google.maps.LatLng(
            53.464960907469835,
            18.739887425618237
          ),
          map = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              // center: { lat: 53.461460907469835, lng: 18.727277425618237 },
              center: pointA,
              zoom: 17,
            }
          ),
          // Instantiate a directions service.
          directionsService = new google.maps.DirectionsService(),
          directionsDisplayWalking = new google.maps.DirectionsRenderer({
            map: map,
            suppressMarkers: true,
          }),
          directionsDisplayDriving = new google.maps.DirectionsRenderer({
            map: map,
            suppressMarkers: true,
          });

        const marker1 = new google.maps.Marker({
          position: pointA,
          // title: "point A",
          label: "A",
          map: map,
        });

        const marker2 = new google.maps.Marker({
          // position: pointB,
          // title: "point B",
          label: "B",
          map: map,
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        });

        // get route from A to B
        // calculateAndDisplayRoute(directionsService, directionsDisplayWalking, pointA, pointB, google.maps.TravelMode.WALKING, marker2);
        calculateAndDisplayRoute(
          directionsService,
          directionsDisplayDriving,
          pointA,
          pointB,
          google.maps.TravelMode.DRIVING,
          marker2
        );
      }),

    (error) => console.log(error)
  );

  return <SMap id="map">Google map</SMap>;
}
