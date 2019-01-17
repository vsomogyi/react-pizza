import selectLayer from './select';
import transformLayer from './transform';
import View from './view';
import { compose } from 'recompose';

export default compose(
  selectLayer,
  transformLayer,
)(View);
