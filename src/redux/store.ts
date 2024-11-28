import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalLoadingSlice from './features/globalLoadingSlice';


const rootReducer = combineReducers({
	user: userSlice,
	globalLoading: globalLoadingSlice,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user", "globalLoading"],
	// blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch

export type IRootState = ReturnType<typeof store.getState>

export default store;
