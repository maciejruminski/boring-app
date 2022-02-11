const initialState: IAuthState = {
  isLoggedIn: false,
  signUp: {
    email: "",
    password: "",
    error: "",
    isSent: false,
  },
  modals: {
    isOneTimePasswordModalOpen: false,
  },
};

export default initialState;
