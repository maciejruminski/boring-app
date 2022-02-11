interface IFiltersState {
  isFiltersModalOpen: boolean;
}

interface IFiltersActions {
  setFiltersModalOn: () => void;
  setFiltersModalOff: () => void;
}

type FiltersActionTypes = "setFiltersModalOn" | "setFiltersModalOff";

interface IFiltersAction {
  type: FiltersActionTypes;
  payload?: any;
}

type FiltersReducerType = (
  state: IFiltersState,
  action: IFiltersAction
) => IFiltersState;

type FiltersContextHook = () => {
  state: IFiltersState;
  actions: IFiltersActions;
};

interface IFiltersStateHandler {
  state: IFiltersState;
  payload?: any;
}
