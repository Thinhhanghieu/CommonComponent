import { INPUT_TYPE, KEY_LOCAL_STORAGE } from "../constants/general.constant";

/**
 *  This general type is mainly used to create type from constant object.
 */
export type ObjectValues<T> = T[keyof T];

export type ObjectKeys<T> = keyof T;

/**
 * Create a type that its value is set by some specific property value of that object (you have to pick it in a picky way ;) ).
 */
export type ObjectValuesPicky<T, K extends keyof T> = T[keyof Partial<
	Pick<T, K>
>];

/**
 * Create a type that its value is defined by value of sub property(S) belong to the property main constant
 */
export type SubObjectValues<T, S extends keyof T[keyof T]> = T[keyof T][S];

export type ReadonlyNonEmptyArray<T> = ReadonlyArray<T> & { readonly 0: T };

export type GetKeys<T> = keyof T;
export type GetArrayObjectType<T> = T extends ReadonlyArray<infer U>
	? U
	: never;
export type GetNonEmptyArrayObjectType<T> = T extends ReadonlyNonEmptyArray<
	infer U
>
	? U
	: never;

export type tLocalStorageKey = ObjectValues<typeof KEY_LOCAL_STORAGE>;

export type ObjectPropType<T, K extends ObjectKeys<T>> = T[K];
export type tInputType = ObjectValues<typeof INPUT_TYPE>;
