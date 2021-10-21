import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormikHelpers } from 'formik/dist/types';
import { setName } from 'redux/reducer/adminReducer';
import { LinkPathName, RegistrationFormInterface } from 'interface/constatns';

export const useSubmitFormRegistration = (): ((
	values: RegistrationFormInterface,
	actions: FormikHelpers<RegistrationFormInterface>
) => void) => {
	const dispatch = useDispatch();
	const history = useHistory();
	return (values: RegistrationFormInterface) => {
		dispatch(setName(values.name));
		history.push(LinkPathName.PROFILE);
	};
};
