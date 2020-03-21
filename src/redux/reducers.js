import { CHANGE_NAME } from '../constants';

const initialState = {
  name: 'Alex',
  age: 10
};

export default function changeState(state = initialState, action) {
  switch(action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload }
    default: return state;
  }
};