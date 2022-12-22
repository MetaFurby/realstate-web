import PropTypes from 'prop-types';

const CommonLayout = (props) => {
	const {
		children,
	} = props;

	return (
		<div>
			{children}
		</div>
	);
};
export default CommonLayout;

CommonLayout.propTypes = {
	children : PropTypes.element.isRequired,
};
