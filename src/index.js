import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {watchUserSaga} from './saga';
import Root from './Root';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(watchUserSaga);

ReactDOM.render(<Provider store={store}>
                    <Root />
                </Provider>, document.querySelector("#root"));