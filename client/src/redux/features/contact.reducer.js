const initialState = {
  items: [],
  loading: false,
  contactEdit: {},
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case "contact/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "contact/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "contact/delete/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "contact/delete/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case "contact/add/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "contact/add/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default contacts;

export const fetchContacts = () => {
  return async (dispatch) => {
    dispatch({ type: "contact/fetch/pending" });
    try {
      const res = await fetch("contact");
      const json = await res.json();
      dispatch({ type: "contact/fetch/fulfilled", payload: json });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchDeleteContact = (id) => {
  return async (dispatch) => {
    dispatch({ type: "contact/delete/fetch/pending" });
    try {
      await fetch(`/contact/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "contact/delete/fetch/fulfilled", payload: id });
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const fetchAddContact = (data) => {
  return async (dispatch) => {
    dispatch({ type: "contact/add/fetch/pending" });
    try {
      const response = await fetch(`/contact`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const json = await response.json();
      dispatch({ type: "contact/add/fetch/fulfilled", payload: json });
    } catch (e) {
      console.log(e.message);
    }
  };
};
