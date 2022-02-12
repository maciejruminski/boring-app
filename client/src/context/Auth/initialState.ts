const initialState: IAuthState = {
  isBusy: false,
  isLoggedIn: false,
  signUp: {
    email: "",
    password: "",
    error: "",
    isSent: false,
  },
  isFadingOut: false,
  modals: {
    isOneTimePasswordModalOpen: false,
  },
};

export default initialState;
