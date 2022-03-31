import { SEARCH_RESULTS } from "../action-types";

export default (state = [], action) => {
	switch (action.type) {
		case SEARCH_RESULTS:
			return action.payload;
		default:
			return state;
	}
};