import { compose, setDisplayName, mapProps } from 'recompose';

const transformProps = ({ items }) => ({
  items: items.toJS(),
});

export default compose(
  setDisplayName('CartTransform'),
  mapProps(transformProps),
);
