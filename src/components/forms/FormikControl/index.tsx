import React from 'react';
import {
	FormikControlEnum,
	InterfaceFormikControl
} from 'interface/formikInterface';
import FormikInput from 'components/forms/FormikInput';

const FormikControl: React.FC<InterfaceFormikControl> = (props) => {
	const { control, ...rest } = props;

	switch (control) {
		case FormikControlEnum.INPUT:
			return <FormikInput {...rest} />;
		default:
			return null;
	}
};

export default FormikControl;
