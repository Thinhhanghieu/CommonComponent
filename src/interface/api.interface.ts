export interface IMeta {
  code: number;
  message: string;
}

export interface IResponse<T> {
  meta: IMeta[];
  data: T;
}