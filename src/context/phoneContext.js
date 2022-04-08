import React, { useReducer } from "react";
import axios from "axios";
import { CASE_EDIT_PHONE, CASE_GET_PHONE } from "../components/helpers/Cases";
import { PHONE_API } from "./API";

export const phoneContext = React.createContext();

const INIT_STATE = {
  phones: [],
  editPhone: null,
  countPhone: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PHONE:
      return {
        ...state,
        phones: action.payload.data,
        countPhone: action.payload.headers["x-total-count"],
      };
    case CASE_EDIT_PHONE:
      console.log(action);
      return { ...state, editPhone: action.payload.data };
    default:
      return state;
  }
};

const ContextPhoneProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getAllPhones() {
    let result = await axios(PHONE_API + window.location.search);
    dispatch({
      type: CASE_GET_PHONE,
      payload: result,
    });
  }
  async function addPhone(newPhone) {
    await axios.post(PHONE_API, newPhone);
    getAllPhones();
  }

  async function deleteOnePhone(id) {
    await axios.delete(`${PHONE_API}/${id}`);
    getAllPhones();
  }

  async function editsPhone(id) {
    let phone = await axios(`${PHONE_API}/${id}`);
    dispatch({
      type: CASE_EDIT_PHONE,
      payload: phone,
    });
  }

  async function editOnePhone(id, editedProduct) {
    await axios.patch(`${PHONE_API}/${id}`, editedProduct);
    getAllPhones();
  }

  async function editOneCommit(id, comments) {
    await axios.patch(`${PHONE_API}/${id}`, { comments: comments });
    editsPhone(id);
  }

  async function editOneLike(id, likes) {
    await axios.patch(`${PHONE_API}/${id}`, { likes: likes });
    getAllPhones();
  }

  return (
    <phoneContext.Provider
      value={{
        countPhone: state.countPhone,
        editPhone: state.editPhone,
        phones: state.phones,
        getAllPhones,
        addPhone,
        deleteOnePhone,
        editOnePhone,
        editsPhone,
        editOneCommit,
        editOneLike,
      }}
    >
      {children}
    </phoneContext.Provider>
  );
};
export default ContextPhoneProvider;
