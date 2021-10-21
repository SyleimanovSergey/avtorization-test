import * as yup from 'yup';

export const validateAuthorizationForm = yup.object().shape({
	name: yup
		.string()
		.matches(/(developer21)/, 'Invalid name')
		.required('Required field'),
	password: yup
		.string()
		.matches(/(123456)/, 'Invalid password')
		.required('Required field')
});
