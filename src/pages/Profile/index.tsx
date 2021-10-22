import React from 'react';

import { getProfile } from 'redux/selector';
import { useTypedSelector } from 'hooks/useTypeSelector';

import styles from './index.module.scss';

const ProfilePage: React.FC = () => {
	const profile = useTypedSelector(getProfile).name;

	return (
		<section className={styles.section}>
			<div className={styles.profile}>
				<h1 className={styles.title}>Login: {profile}</h1>
			</div>
		</section>
	);
};

export default ProfilePage;
