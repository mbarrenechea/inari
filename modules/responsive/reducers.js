
import { SIZES } from 'utils/responsive';

import * as actions from './actions';
import initialState from './initial-state';

export default {
  [actions.setSizes]: (state, { payload }) => {
    const { mobile, tablet, phone, desktop } = { ...initialState, ...payload };

    let fakeWidth;

    if (mobile) {
      if (phone) {
        fakeWidth = SIZES.phone;
      } else if (tablet) {
        fakeWidth = SIZES.tablet;
      } else {
        // TODO - should we ever get here? default to the lowest value i guess
        fakeWidth = SIZES.phone;
      }
    } else if (desktop) {
      fakeWidth = SIZES.desktop;
    } else {
      fakeWidth = SIZES.desktop;
    }

    return { ...state, mobile, tablet, phone, desktop, fakeWidth };
  }
};
