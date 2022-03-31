// Simulates an API service for now (we are using sample data)
import SAMPLE_DATA from './sample-data';

// API simulation
export const fetch = async (filter /* TODO */) => {
	return {
		data: SAMPLE_DATA,
		error: null
	};
};