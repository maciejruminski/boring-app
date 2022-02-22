// Functions.
import { forwardRef, useState } from "react";

// Context.
import { useFiltersAndPlacesContext } from "@context/FiltersAndPlaces";
import { useTranslation } from "react-i18next";

// Components.
import Input from "@common/Form/Input";

// eslint-disable-next-line no-empty-pattern
export default forwardRef<HTMLInputElement>(({}, ref) => {
  const {
    state: { filters },
  } = useFiltersAndPlacesContext();

  const [keyword, setKeyword] = useState(filters.keyword);

  const setHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const { t } = useTranslation();

  return (
    <Input
      label={t("Dashboard.Filters.Keyword.Input__label")}
      value={keyword}
      id="keyword"
      onChangeHandler={setHandler}
      error={""}
      checkValidity={false}
      ref={ref}
    />
  );
});
