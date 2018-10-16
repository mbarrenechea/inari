import MobileDetect from 'mobile-detect';

import { createAction, createThunkAction } from 'redux-tools';

export const setSizes = createAction('responsive/setSizes');
export const setResponsive = createThunkAction('responsive/setResponsive', ({ headers = {} } = {}) => (dispatch) => {
  const ua = headers['user-agent'] || headers['User-Agent'];
  const md = new MobileDetect(ua);
  const sizes = {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    desktop: !md.mobile()
  };

  dispatch(setSizes(sizes));
});

export default {
  setSizes,
  setResponsive
};
