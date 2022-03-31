import { combineReducers } from 'redux';

// import counter from './counter';
import groups from './groups';
import search from './search';
import results from './results';

export default combineReducers({
	query: search,
	groups,
	results
});
