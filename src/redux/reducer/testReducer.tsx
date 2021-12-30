import Actions from '../actions';

const initState = {
  value: 0,
};

const test = (state = initState, action: any) => {
  switch (action.type) {
    case Actions.test.constants.INCREMENT:
      return {
        ...state,
        value: action.payload,
      };
    case Actions.test.constants.DECREMENT:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default test;
