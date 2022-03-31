import { SHOW_GROUPS } from "../action-types";

export default (state = [], action) => {
	switch (action.type) {
		case SHOW_GROUPS:
			return action.payload;
		default:
			return state;
	}
};