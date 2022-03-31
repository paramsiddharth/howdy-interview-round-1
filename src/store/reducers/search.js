import { SEARCH_INPUT } from '../action-types';

export default (state = '', action) => {
	switch (action.type) {
		case SEARCH_INPUT:
			return action.payload;
		default:
			return state;
	}
};