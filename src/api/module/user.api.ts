import { IResponse } from "../../interface/api.interface";
import privateClient from "../client/private.client";

interface IResponseUser {
	name: string;
	role: string;
}

interface IUserParams {
	page: number;
	pageSize: number;
}

const VERSION_API = "v1";

const userEndpoint = {
	getList: `${VERSION_API}/user`,
	removeUser: ({ id }: { id: number }) => `${VERSION_API}/user/${id}`,
	update: `${VERSION_API}/user`,
};

const userApi = {
	getList: async (params: IUserParams): Promise<IResponse<IResponseUser[]>> => {
		try {
			const response = await privateClient.get<IResponse<IResponseUser[]>>(
				userEndpoint.getList,
				{
					params: {
						page: params.page,
						pageSize: params.pageSize,
					},
				}
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	remove: async ({ id }: { id: number }): Promise<IResponse<IResponseUser[]>> => {
		try {
			const response = await privateClient.delete<IResponse<IResponseUser[]>>(
				userEndpoint.removeUser({ id })
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	update: async (params: any): Promise<IResponse<IResponseUser[]>> => {
		try {
			const response = await privateClient.post<IResponse<IResponseUser[]>>(
				userEndpoint.update,
				// params depends BE to update params for suit cab be obj, ary, etc...
				params
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default userApi;
