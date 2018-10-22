export class Response {
    public errors: string[];
    public success: boolean;
}

export class ResponseResult<TResult> extends Response {
    public result: TResult;
}