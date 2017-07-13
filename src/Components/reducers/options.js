import initialState from '../../config/config';
import fields from './fieldsReducer';

const options = (state = initialState.attributes.form.options, action) => {
  const updatedState = Object.assign({}, state, { fields: fields(state.fields, action) });
  return updatedState;
};

export default options;
