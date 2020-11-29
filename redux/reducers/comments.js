import { SET_COMMENT, ADD_COMMENT } from "../actions/types";
const initialState = {
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };

    case ADD_COMMENT:
      const newComment = action.payload;
      return {
        ...state,
        comments: [...state.comments, newComment],
      };

    default:
      return state;
  }
};
