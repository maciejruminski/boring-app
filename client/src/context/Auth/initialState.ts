const initialState: IAuthState = {
  isBusy: false,
  isLoggedIn: false,
  signUp: {
    email: "",
    password: "",
    error: "",
    isEmailSent: false,
    isEmailResent: false,
  },
  isFadingOut: false,
  isOneTimePasswordModalOpen: false,
};

export default initialState;
