import { compose, setDisplayName, mapProps } from 'recompose';

const transformProps = ({ items, removeItem }) => ({
  items: items.toJS(),
  removeItem,
});

export default compose(
  setDisplayName('CartTransform'),
  mapProps(transformProps),
);
