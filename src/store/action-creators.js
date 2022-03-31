// import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './action-types';

// export const incrementCount = () => ({ type: INCREMENT_COUNTER });
// export const decrementCount = () => ({ type: DECREMENT_COUNTER });

import * as groups from '../services/groups';
import { RETRIEVE_GROUPS, SEARCH_INPUT, SEARCH_RESULTS, SHOW_GROUPS } from './action-types';
import store from './store';

export const showGroups = groups => {
	return {
		type: SHOW_GROUPS,
		payload: groups
	};
};

export const retrieveGroups = (filter /* TODO */) => {
	groups.fetch(/* filter: Filters are currently being applied in the front-end */)
		.then(({ data }) => store.dispatch(showGroups(data)));
	return {
		type: RETRIEVE_GROUPS
	};
};

export const getResults = ({ query, groups }) => {
	return {
		type: SEARCH_RESULTS,
		payload: { query, groups }
	};
};

export const searchFor = query => {
	const { groups } = store.getState();
	store.dispatch(getResults({ query, groups }));
	return {
		type: SEARCH_INPUT,
		payload: query
	};
};