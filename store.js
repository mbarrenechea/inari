import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// New modules
import { handleModule } from 'redux-tools';

// Modules
import * as responsive from 'modules/responsive';

// Layout
import * as header from 'layout/header';

// Pages
// import * as home from 'layout/home'

const reducer = combineReducers({
  // Modules
  responsive: handleModule(responsive),

  // Layout
  header: handleModule(header)

  // Pages
  // home: handleModule(home)
});

const initStore = (initialState = {}) =>
  createStore(
    reducer,
    initialState,
    /* Redux dev tool, install chrome extension in
     * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en */
    composeWithDevTools(
      /* The router middleware MUST be before thunk otherwise the URL changes
      * inside a thunk function won't work properly */
      applyMiddleware(thunk)
    )
  );

export { initStore };
