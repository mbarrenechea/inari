import { connect } from 'react-redux';
import * as actions from './actions';
import * as reducers from './reducers';
import initialState from './initial-state';

import HeaderComponent from './component';

// Mandatory
export { actions, reducers, initialState };

export default connect(
  state => ({
    ...state.header,
    routes: state.routes,
    responsive: state.responsive
  }),
  actions
)(HeaderComponent);
