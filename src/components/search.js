import { useEffect } from "react";
import Suggestions from "./suggestions";

export default ({ query, setQuery }) => {
	useEffect(() => {
		if (query.length >= 3) {
			// Search logic (update suggestions AND list once search is executed)
		}
	}, [query]);

	return <div className="row">
			<div className="col-12 col-md-6 offset-md-3 mt-4">
			<div className="input-group mb-3">
				<span className="input-group-text">Search groups:</span>
				<input autoFocus value={query}
					onChange={e => setQuery(e.target.value)}
					type="text" className="form-control"
					placeholder="Enter something here"
					aria-label="Query" />
			</div>
			<Suggestions query={query} />
		</div>
	</div>;
};