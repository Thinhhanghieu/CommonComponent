
export interface IGetUsersParam {
     login: string;
     page: number;
     size: number;
}

export interface IFormDataUser{
     userId: number,
     login: string,
     fullName: string,
     password: string,
     status: boolean,
     companyId: number,
     agentFlg: boolean,
     branchId: number,
     deptId: number,
     sectionId: number,
}

export interface IChangePassword{
     login: string,
     password: string,
}

export interface IUser {
     userId: number,
     login: string,
     fullName: string,
     password: string,
     companyId: number,
     branchId: number,
     deptId: number,
     sectionId: number,
     agentFlg: boolean,
}


export const ROLE_CD = {
     ADMIN: 'admin',
     USER: 'user',
     GUEST: 'guest',
} as const;

export const STATUS = {
     ACTIVE: 1,
     DEACTIVATE: 0,
} as const;


export interface IAuthData {
     token: string;
     user: IUser;
}

export type Nullable<T> = T | null;
