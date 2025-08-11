export const initialProductCount = 1;

export const productCounterReducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state === 5 ? state : state + 1;
    case 'decrement':
      return state === initialProductCount ? state : state - 1;
    default:
      return state;
  }
};
