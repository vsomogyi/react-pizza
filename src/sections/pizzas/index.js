import selectData from './select';
import transformData from './transform';
import View from './view';
import { compose } from 'recompose';

export default compose(
  selectData,
  transformData,
)(View);
