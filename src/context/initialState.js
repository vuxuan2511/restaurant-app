import { fetchUser } from '../utils/fetchLocalStrorageData';

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
};
