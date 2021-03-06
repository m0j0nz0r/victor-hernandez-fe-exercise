import { categoriesInitialState } from '../config/config';
import { SELECT_CATEGORY } from '../actions/actionTypes';

const categories = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, selectedCategoryId: action.id };
    default:
      return state;
  }
};

export default categories;
