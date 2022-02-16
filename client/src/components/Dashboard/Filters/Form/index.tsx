// Functions.
import { useRef, useEffect, useState } from "react";

// Controllers.
import Helper from "@controllers/Helper";

// Context.
import { useFiltersContext } from "@context/Filters";
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Types from "../Types";
import Keyword from "../Keyword";
import Distance from "../Distance";
import MinPrice from "../MinPrice";
import MaxPrice from "../MaxPrice";
import OpenNow from "../OpenNow";
import Button from "@common/Button";

// Styles.
import { SForm, SClose, SHeading, SNote, SWarning } from "./styles";

// Icons.
import closeIconPath from "@images/close.svg";
import WarningIconPath from "@images/warning.svg";

export default function Form() {
  const {
    state: { isFiltersModalOpen },
    actions: { setFiltersModalOff },
  } = useFiltersContext();

  const {
    actions: { updateFilters, showNewPlacesByFilters },
  } = useFiltersAndPlacesContext();

  const distanceRef = useRef<HTMLSelectElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const minPriceRef = useRef<HTMLSelectElement>(null);
  const maxPriceRef = useRef<HTMLSelectElement>(null);
  const openNowRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filters = {
      distance: distanceRef?.current?.value as string,
      keyword: keywordRef?.current?.value as string,
      type: typeRef?.current?.value as string,
      minPrice: minPriceRef?.current?.value as string,
      maxPrice: maxPriceRef?.current?.value as string,
      openNow: openNowRef?.current?.checked as boolean,
    };

    showNewPlacesByFilters(filters);
    updateFilters(filters);
  };

  useEffect(
    () => Helper.makeBodyUnscrollable(isFiltersModalOpen),
    [isFiltersModalOpen]
  );

  const fadingOutTime = 500;
  const [isFadingOut, setIsFadingOut] = useState(false);

  const modalOff = () => {
    setIsFadingOut(true);
    setTimeout(setFiltersModalOff, fadingOutTime);
  };

  useEffect(() => {
    if (!isFiltersModalOpen) {
      setIsFadingOut(false);
    }
  }, [isFiltersModalOpen]);

  const { t } = useTranslation();

  if (isFiltersModalOpen) {
    return (
      <>
        <SForm
          method="POST"
          isModalOpen={isFiltersModalOpen}
          isFadingOut={isFadingOut}
          onSubmit={onSubmitHandler}
        >
          <SClose
            onClickHandler={modalOff}
            text={t("Dashboard.Filters.Form.SClose__text")}
            icon={closeIconPath}
          />
          <SHeading>{t("Dashboard.Filters.Form.SHeading")}</SHeading>
          <SNote>{t("Dashboard.Filters.Form.SNote")}</SNote>
          <Keyword ref={keywordRef} />
          <Distance ref={distanceRef} />
          <Types ref={typeRef} />
          <SWarning>
            <img src={WarningIconPath} aria-hidden="true" alt="Warning icon" />
            {t("Dashboard.Filters.Form.SWarning")}
          </SWarning>
          <MinPrice ref={minPriceRef} />
          <MaxPrice ref={maxPriceRef} />
          <OpenNow ref={openNowRef} />

          <Button
            type="submit"
            onClickHandler={modalOff}
            text={t("Dashboard.Filters.Form.Button__text")}
          />
        </SForm>
      </>
    );
  }

  return <></>;
}
