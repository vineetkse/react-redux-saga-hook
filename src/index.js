import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import rootSaga from './saga';
import Root from './Root';

//Create a store with initial values
const store = configureStore(window.__INITIAL_STATE__);
//Run root saga which contains fork of all sagas
store.runSaga(rootSaga);

//Root component nested in redux provider
ReactDOM.render(<Provider store={store}>
                    <Root />
                </Provider>, document.querySelector("#root"));