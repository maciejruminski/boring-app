const initialState: IAuthState = {
  isBusy: false,
  isLoggedIn: false,
  email: {
    email: "",
    error: "",
    isSent: false,
    isResent: false,
    isComponentActive: true,
  },
  password: {
    password: "",
    error: "",
    isComponentInactive: false,
  },
};

export default initialState;
