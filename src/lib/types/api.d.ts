import { status } from './../../../node_modules/next-auth/client/__tests__/helpers/mocks.d';

declare type SuccessfulResponse<T> ={
   message:'success',
   statusCode:number,
   data:T
};

declare type ErrorResponse ={
    message:'error' | 'fail' ;
    statusCode:number;
    message:"string";


};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse