export declare const BASE_PATH: string;
export interface ConfigurationParameters {
    basePath?: string;
    fetchApi?: FetchAPI;
    middleware?: Middleware[];
    queryParamsStringify?: (params: HTTPQuery) => string;
    username?: string;
    password?: string;
    apiKey?: string | ((name: string) => string);
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>);
    headers?: HTTPHeaders;
    credentials?: RequestCredentials;
}
export declare class Configuration {
    private configuration;
    constructor(configuration?: ConfigurationParameters);
    set config(configuration: Configuration);
    get basePath(): string;
    get fetchApi(): FetchAPI | undefined;
    get middleware(): Middleware[];
    get queryParamsStringify(): (params: HTTPQuery) => string;
    get username(): string | undefined;
    get password(): string | undefined;
    get apiKey(): ((name: string) => string) | undefined;
    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined;
    get headers(): HTTPHeaders | undefined;
    get credentials(): RequestCredentials | undefined;
}
export declare const DefaultConfig: Configuration;
export declare class BaseAPI {
    protected configuration: Configuration;
    private middleware;
    constructor(configuration?: Configuration);
    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]): T;
    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>): T;
    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>): T;
    protected request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response>;
    private createFetchParams;
    private fetchApi;
    private clone;
}
export declare class ResponseError extends Error {
    response: Response;
    name: "ResponseError";
    constructor(response: Response, msg?: string);
}
export declare class FetchError extends Error {
    cause: Error;
    name: "FetchError";
    constructor(cause: Error, msg?: string);
}
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
export type FetchAPI = WindowOrWorkerGlobalScope['fetch'];
export type Json = any;
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export type HTTPHeaders = {
    [key: string]: string;
};
export type HTTPQuery = {
    [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | Set<string | number | null | boolean> | HTTPQuery;
};
export type HTTPBody = Json | FormData | URLSearchParams;
export type HTTPRequestInit = {
    headers?: HTTPHeaders;
    method: HTTPMethod;
    credentials?: RequestCredentials;
    body?: HTTPBody;
};
export type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';
export type InitOverrideFunction = (requestContext: {
    init: HTTPRequestInit;
    context: RequestOpts;
}) => Promise<RequestInit>;
export interface FetchParams {
    url: string;
    init: RequestInit;
}
export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}
export declare function exists(json: any, key: string): boolean;
export declare function querystring(params: HTTPQuery, prefix?: string): string;
export declare function mapValues(data: any, fn: (item: any) => any): {};
export declare function canConsumeForm(consumes: Consume[]): boolean;
export interface Consume {
    contentType: string;
}
export interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}
export interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}
export interface ErrorContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    error: unknown;
    response?: Response;
}
export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
    onError?(context: ErrorContext): Promise<Response | void>;
}
export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}
export interface ResponseTransformer<T> {
    (json: any): T;
}
export declare class JSONApiResponse<T> {
    raw: Response;
    private transformer;
    constructor(raw: Response, transformer?: ResponseTransformer<T>);
    value(): Promise<T>;
}
export declare class VoidApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<void>;
}
export declare class BlobApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<Blob>;
}
export declare class TextApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<string>;
}
