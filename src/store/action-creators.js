import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './action-types';

export const incrementCount = () => ({ type: INCREMENT_COUNTER });
export const decrementCount = () => ({ type: DECREMENT_COUNTER });