import React from 'react';

import AuthorizationForm from 'components/forms/RegistrationForm';

import styles from './index.module.scss';

const AuthorizationPage: React.FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.blockAuthorization}>
				<AuthorizationForm />
			</div>
		</section>
	);
};

export default AuthorizationPage;
