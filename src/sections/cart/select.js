import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import { getItems } from '../../store/cart/selectors';

const mapStateToProps = state => ({
  items: getItems(state),
});

export default compose(
  setDisplayName('CartSelect'),
  connect(mapStateToProps),
);
