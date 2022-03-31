const Item = ({
	title, author
}) => {
	
};

export default ({ query }) => {
	return <div style={{
		display: 'absolute',
		transform: 'translateY(-16px)',
		width: '100%',
		margin: 0,
		border: '3px solid black'
	}}>
		{ JSON.stringify(query) }
	</div>;
};