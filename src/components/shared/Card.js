import './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
	const {
		children,
	} = props;
	return (
		<div>
			{children}
		</div>
	);
};
export default Card;

Card.propTypes = {
	children : PropTypes.element.isRequired,
};
