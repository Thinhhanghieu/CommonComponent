import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KEY_LOCAL_STORAGE } from '../../constants/general.constant';
import { IAuthData, Nullable } from "../../interface/user.interface";

interface IUserState {
	user: Nullable<IAuthData>;
}

const initialState: IUserState  = {
	user: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<Nullable<IAuthData>>) => {
			if (action.payload === null) {
				localStorage.removeItem(KEY_LOCAL_STORAGE.TOKEN);
			} else {
				if (action.payload.token){
					localStorage.setItem(KEY_LOCAL_STORAGE.TOKEN, action.payload.token);
				}
			}

			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions
export default userSlice.reducer;
