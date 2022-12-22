import PropTypes from 'prop-types';

const Footer = (props) => {
	const {
		children,
	} = props;

	return (
		<div>
			{children}
		</div>
	);
};
export default Footer;

Footer.propTypes = {
	children : PropTypes.element.isRequired,
};
