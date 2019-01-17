import selectLayer from './select';
import transformLayer from './transform';
import submitLayer from './submit';
import View from './view';
import { compose } from 'recompose';

export default compose(
  selectLayer,
  transformLayer,
  submitLayer,
)(View);
