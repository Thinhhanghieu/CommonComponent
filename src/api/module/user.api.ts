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

const userEndpoint = {
	getList: "/user",
	removeUser: ({ id }: { id: number }) => `user/${id}`,
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
			const response = await privateClient.get<IResponse<IResponseUser[]>>(
				userEndpoint.removeUser({ id })
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default userApi;
