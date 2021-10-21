import {
	ProfileAction,
	ProfileActionEnum,
	profileReducerInterface
} from './types';

const initialState: profileReducerInterface = {
	name: ''
};

type profileReducer = typeof initialState;

const reducer = (
	state = initialState,
	action: ProfileAction
): profileReducer => {
	switch (action.type) {
		case ProfileActionEnum.setName: {
			return {
				...state,
				name: action.payload
			};
		}
		default:
			return state;
	}
};

export default reducer;

export const setName = (name: string): ProfileAction => ({
	type: ProfileActionEnum.setName,
	payload: name
});
