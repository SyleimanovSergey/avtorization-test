import React, { ChangeEvent } from 'react';

export interface InterfaceFormikControl {
	control: string;
	name: string;
	label: string;
	style?: string;
	type?: string;
	onChange?: (e: ChangeEvent) => void;
	children?: (errorMessage: string) => React.ReactNode;
}

export enum FormikControlEnum {
	INPUT = 'input'
}

export interface InterfaceFormikInput {
	name: string;
	label: string;
	style?: string;
}
