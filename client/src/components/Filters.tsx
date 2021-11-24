// Functions.
import React, { useRef } from "react";

// Context.
import { useGlobalContext } from "../context";

// Components.
import Types from "./Filters/Types";
import Keyword from "./Filters/Keyword";
import Distance from "./Filters/Distance";
import MinPrice from "./Filters/MinPrice";
import MaxPrice from "./Filters/MaxPrice";
import OpenNow from "./Filters/OpenNow";

export default function Filters() {
  const { state, actions } = useGlobalContext();
  const distanceRef = useRef<HTMLInputElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  const filter = (evt: React.FormEvent<HTMLFormElement>) =>
    actions.filter(evt, {
      distance: distanceRef?.current?.value,
      keyword: keywordRef?.current?.value,
      type: typeRef?.current?.value,
      minPrice: minPriceRef?.current?.value,
      maxPrice: maxPriceRef?.current?.value,
      openNow: openNowRef?.current?.checked,
    });

  const callBackendAPIPlaces = async () => {
    const response = await fetch("/findPlaces", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.filters),
    });
    const body = await response.json();

    // console.log(filters);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  const handleSubmitPlaces = (evt: any) => {
    evt.preventDefault();
    // console.log("before call");
    // const data = new FormData(evt.target);

    setTimeout(() => {
      callBackendAPIPlaces()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }, 1000);
  };

  return (
    <div>
      <form method="POST" onSubmit={filter}>
        <Distance ref={distanceRef} />
        <Keyword ref={keywordRef} />
        <Types ref={typeRef} />
        <MinPrice ref={minPriceRef} />
        <MaxPrice ref={maxPriceRef} />
        <OpenNow ref={openNowRef} />

        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
      <div>
        <h3>Filtry:</h3>
        <p>Distance: {state.filters.distance}</p>
        <p>Keyword: {state.filters.keyword}</p>
        <p>Type: {state.filters.type}</p>
        <p>Min Price: {state.filters.minPrice}</p>
        <p>Max Price: {state.filters.maxPrice}</p>
        <p>Open Now: {state.filters.openNow ? "true" : "false"}</p>
      </div>
    </div>
  );
}
