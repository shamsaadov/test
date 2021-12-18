const initialState = {
  error: false,
  signIn: false,
  signUp: false,
  success: false,
  deleting: false,
  token: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "user/login/pending":
      return {
        ...state,
        signIn: true,
        error: null,
      };
    case "user/login/fulfilled":
      return {
        ...state,
        signIn: false,
        token: action.payload.token,
        error: null,
      };
    case "user/login/rejected":
      return {
        ...state,
        signIn: false,
        error: action.error,
      };
    case "user/signup/pending":
      return {
        ...state,
        signUp: true,
        success: false,
        error: null,
      };
    case "user/signup/fulfilled":
      return {
        ...state,
        signUp: false,
        success: true,
      };
    case "user/signup/rejected":
      return {
        ...state,
        signUp: false,
        error: action.error,
      };
    // case "item/delete/pending":
    //   return {
    //     ...state,
    //     deleting: true
    //   }
    // case "item/delete/fulfilled":
    //   return {
    //     ...state,
    //     deleting: false,
    //
    //   }
    default:
      return state;
  }
};

export default user;

export const fetchLoginUser = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: "user/login/pending" });
    const response = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        login: data.login,
        password: data.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/login/rejected", error: json.error });
    } else {
      dispatch({ type: "user/login/fulfilled", payload: json });
      history.push('/contacts')
    }
  };
};

export const fetchSignUpUser = (data, history) => {
  return async (dispatch) => {
    dispatch({ type: "user/signup/pending" });
    const response = await fetch("signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        login: data.login,
        password: data.login,
      }),
    });
    const json = await response.json();
    if (json.error) {
      dispatch({ type: "user/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "user/signup/fulfilled", payload: json });
      history.push('/login')
    }
  };
};

export const fetchDeleteItem = (id) => {

};
