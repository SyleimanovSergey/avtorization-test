import { RootState } from './store';
import { profileReducerInterface } from './reducer/adminReducer/types';

export const getProfile = (state: RootState): profileReducerInterface =>
	state.profileReducer;
