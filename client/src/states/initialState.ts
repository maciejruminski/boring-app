interface IState {
  isLoggedIn: boolean;
}

const initialState = (): IState => {
  return {
    isLoggedIn: false,
  };
};

export default initialState;
