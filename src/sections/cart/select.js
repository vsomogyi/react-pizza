import { compose, setDisplayName, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';
import { getItems } from '../../store/cart/selectors';
import { remove } from '../../store/cart/actions';

const mapStateToProps = state => ({
  items: getItems(state),
});

const mapDispathToProps = dispatch => ({
  removeItem: id => {
    dispatch(remove(id));
  },
});

export default compose(
  setDisplayName('CartSelect'),
  connect(
    mapStateToProps,
    mapDispathToProps,
  ),
  branch(({ items }) => !items.size, renderNothing),
);
