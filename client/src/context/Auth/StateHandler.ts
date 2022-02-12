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

  static setFadingOutOn({ state }: IAuthStateHandler) {
    return { ...state, isFadingOut: true };
  }

  static setOneTimePasswordModalOn({ state }: IAuthStateHandler) {
    return {
      ...state,
      modals: { ...state.modals, isOneTimePasswordModalOpen: true },
    };
  }

  static setSignUpError({ state, payload: error }: IAuthStateHandler) {
    return {
      ...state,
      signUp: { ...state.signUp, error },
    };
  }

  static setSignUpEmail({ state, payload: email }: IAuthStateHandler) {
    return {
      ...state,
      signUp: { ...state.signUp, email },
    };
  }

  static setOneTimePassword({ state, payload: password }: IAuthStateHandler) {
    return {
      ...state,
      // signUp: { ...state.signUp, password }
    };
  }

  static setSignUpEmailAsSent({ state }: IAuthStateHandler) {
    return {
      ...state,
      // signUp: { ...state.signUp, isSent: true }
    };
  }

  static handlers = {
    setBusyOn: StateHandler.setBusyOn,
    setBusyOff: StateHandler.setBusyOff,
    setUserAuthenticationOn: StateHandler.setUserAuthenticationOn,
    setUserAuthenticationOff: StateHandler.setUserAuthenticationOff,
    setFadingOutOn: StateHandler.setFadingOutOn,
    setOneTimePasswordModalOn: StateHandler.setOneTimePasswordModalOn,
    setSignUpError: StateHandler.setSignUpError,
    setSignUpEmail: StateHandler.setSignUpEmail,
    setSignUpEmailAsSent: StateHandler.setSignUpEmailAsSent,
    setOneTimePassword: StateHandler.setOneTimePassword,
  };
}
