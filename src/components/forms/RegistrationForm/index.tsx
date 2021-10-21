import React from 'react';
import { Form, Formik } from 'formik';

import FormikControl from 'components/forms/FormikControl';

import { RegistrationFormState } from 'utils/InitialsStateForm';
import { validateAuthorizationForm } from 'utils/validateForms';
import { useSubmitFormRegistration } from 'hooks/useSubmitForms';

import styles from './index.module.scss';

const AuthorizationForm: React.FC = () => {
	const submit = useSubmitFormRegistration();

	return (
		<Formik
			initialValues={RegistrationFormState}
			validationSchema={validateAuthorizationForm}
			onSubmit={submit}
		>
			{({ isValid, dirty }) => (
				<Form>
					<div className={styles.formTitleBlock}>
						<h1 className={styles.formTitleText}>Please log in</h1>
					</div>
					<div className={styles.formBlock}>
						<FormikControl
							control="input"
							name="name"
							label="Login"
							style={styles.name}
						/>
						<FormikControl
							control="input"
							name="password"
							label="Password"
							type="password"
							style={styles.password}
						/>
						<button
							disabled={!(isValid && dirty)}
							className={styles.button}
							type="submit"
						>
							Go!
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default AuthorizationForm;
