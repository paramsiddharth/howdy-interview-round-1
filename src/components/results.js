import './results.css';

const Item = ({
	title,
	author,
	onClick
}) => {
	return <div className='search-item'>
		{ title } ({ author.firstName } { author.surname })
	</div>;
};

export default ({ results }) => {
	return <div className="row">
			<div className="col-12 col-md-6 offset-md-3 mt-4">
			{
				results.map((g, i) => <Item key={i} {...g} />)
			}
		</div>
	</div>;
};