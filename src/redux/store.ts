import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import globalLoadingSlice from './features/globalLoadingSlice';
import themeSlice from './features/themeSlice';


const rootReducer = combineReducers({
	user: userSlice,
	globalLoading: globalLoadingSlice,
	theme: themeSlice,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user", "globalLoading", "theme"],
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
