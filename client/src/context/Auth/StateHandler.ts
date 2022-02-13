export default class StateHandler {
  static setBusyOn({ state }: IAuthStateHandler) {
    return { ...state, isBusy: true };
  }

  static setBusyOff({ state }: IAuthStateHandler) {
    return { ...state, isBusy: false };
  }

  static setUserAuthenticationOn({ state }: IAuthStateHandler) {
    return { ...state, isLoggedIn: true };
  }

  static setUserAuthenticationOff({ state }: IAuthStateHandler) {
    return { ...state, isLoggedIn: false };
  }

  static setPasswordComponentAsInactive({ state }: IAuthStateHandler) {
    return { ...state, password: { ...state.password, isComponentInactive: true } };
  }

  static setPasswordModalOn({ state }: IAuthStateHandler) {
    return { ...state, isModalOpen: true };
  }

  static setEmailError({ state, payload: error }: IAuthStateHandler) {
    return { ...state, email: { ...state.email, error } };
  }

  static setPasswordError({ state, payload: error }: IAuthStateHandler) {
    return { ...state, password: { ...state.password, error } };
  }

  static setSignUpEmail({ state, payload: email }: IAuthStateHandler) {
    return { ...state, email: { ...state.email, email } };
  }

  static setOneTimePassword({ state, payload: password }: IAuthStateHandler) {
    return { ...state, password: { ...state.password, password } };
  }

  static setEmailAsSent({ state }: IAuthStateHandler) {
    return { ...state, email: { ...state.email, isSent: true } };
  }

  static setEmailAsResent({ state }: IAuthStateHandler) {
    return { ...state, email: { ...state.email, isResent: true } };
  }

  static setEmailComponentAsInactive({ state }: IAuthStateHandler) {
    return { ...state, email: { ...state.email, isComponentActive: false } };
  }

  static handlers = {
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setUserAuthenticationOn: StateHandler.setUserAuthenticationOn,
    setUserAuthenticationOff: StateHandler.setUserAuthenticationOff,
    setPasswordComponentAsInactive: StateHandler.setPasswordComponentAsInactive,
    setPasswordModalOn: StateHandler.setPasswordModalOn,
    setEmailError: StateHandler.setEmailError,
    setPasswordError: StateHandler.setPasswordError,
    setSignUpEmail: StateHandler.setSignUpEmail,
    setEmailAsSent: StateHandler.setEmailAsSent,
    setEmailAsResent: StateHandler.setEmailAsResent,
    setOneTimePassword: StateHandler.setOneTimePassword,
    setEmailComponentAsInactive: StateHandler.setEmailComponentAsInactive,
  };
}
