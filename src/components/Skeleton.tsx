import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={280}
		height={477}
		viewBox="0 0 280 477"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<circle cx="131" cy="121" r="120" />
		<rect x="28" y="257" rx="0" ry="0" width="200" height="25" />
		<rect x="5" y="300" rx="0" ry="0" width="255" height="105" />
		<rect x="6" y="435" rx="0" ry="0" width="83" height="28" />
		<rect x="130" y="425" rx="30" ry="30" width="130" height="55" />
	</ContentLoader>
);

export default Skeleton;
