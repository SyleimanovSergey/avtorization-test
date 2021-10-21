import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import AuthorizationPage from 'pages/Authorization';
import ProfilePage from 'pages/Profile';

import { LinkPathName } from 'interface/constatns';

const { MAIN, PROFILE } = LinkPathName;

const Router: React.FC = () => {
	return (
		<>
			<Header />
			<main>
				<Switch>
					<Route exact path={MAIN} component={AuthorizationPage} />
					<Route exact path={PROFILE} component={ProfilePage} />
				</Switch>
			</main>
			<Footer />
		</>
	);
};

export default Router;
