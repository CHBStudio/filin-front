import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import 'babel-polyfill';

import history from 'utils/history';
import storeScheme from 'store';
import checkIsMobile from 'utils/checkIsMobile';

import Root from './Root';


const middleware = applyMiddleware(...storeScheme.sagas);
const store = createStore(
  storeScheme.reducers,
  middleware
);


const isMobile = checkIsMobile();
window.__IS_MOBILE__ = isMobile;
document.getElementsByTagName('html')[0].classList.add(isMobile ? '__IS_MOBILE__' : '__IS_DESKTOP__');



ReactDOM.render(
    <Provider store={ store }>
        <Router history={history}>
            <Root/>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
