import React, { useReducer } from "react";
import axios from "axios";

const API_COMMIT = "http://localhost:8001/commit";

export const commitContext = React.createContext();

const INIT_STATE = {
  commit: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMMIT":
      return {
        ...state,
        commit: action.payload.data,
      };
    default:
      return state;
  }
};

const CommitContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCommit() {
    let res = await axios(API_COMMIT);
    dispatch({
      type: "GET_COMMIT",
      payload: res,
    });
  }
  async function addCommit(newCommit) {
    await axios.post(API_COMMIT, newCommit);
    getCommit();
  }
  async function removeCommit(id) {
    await axios.delete(`${API_COMMIT}/${id}`);
    getCommit();
  }

  return (
    <commitContext.Provider
      value={{ commit: state.commit, getCommit, addCommit, removeCommit }}
    >
      {children}
    </commitContext.Provider>
  );
};

export default CommitContextProvider;
