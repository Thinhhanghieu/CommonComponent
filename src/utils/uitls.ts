import { tLocalStorageKey } from "../types/common.type";

export const parseJSON = <T>(value: string | null): T | string | null => {
	try {
		return value ? JSON.parse(value) : null;
	} catch (e) {
		return value;
	}
};

export const getLocalStorage = (key: tLocalStorageKey): any => {
	return parseJSON(localStorage.getItem(key));
};

export const setLocalStorage = (key: tLocalStorageKey, value: any): void => {
	localStorage.setItem(key, JSON.stringify(value ?? ""));
};
