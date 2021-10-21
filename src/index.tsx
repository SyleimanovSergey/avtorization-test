import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';

import App from 'app';

import history from 'utils/history';

import 'assets/styles/global/reset.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router history={history}>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
