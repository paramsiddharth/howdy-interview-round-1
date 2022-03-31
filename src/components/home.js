import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { retrieveGroups, searchFor } from '../store';
import Results from './results';
import Search from './search';

const Home = () => {
	const query = useSelector(state => state.query);
	const groups = useSelector(state => state.groups);
	const results = useSelector(state => state.results);
	const dispatch = useDispatch();
	const setQuery = newQuery => dispatch(searchFor(newQuery));

	useEffect(() => {
		dispatch(retrieveGroups());
	}, []);

	return <div className="container-fluid w-100 m-0 p-0">
		{/* <div style={{ position: 'fixed', opacity: 0.2, userSelect: 'none' }}>DEBUG: { JSON.stringify(groups) }</div> */}
		<Search query={query} setQuery={setQuery} />
		<Results results={groups} />
	</div>;
};

export default Home;