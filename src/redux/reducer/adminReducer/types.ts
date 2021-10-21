export interface profileReducerInterface {
	name: string;
}

export interface setName {
	type: ProfileActionEnum.setName;
	payload: string;
}

export enum ProfileActionEnum {
	setName = 'setName'
}

export type ProfileAction = setName;
