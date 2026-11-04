import { Context, Response } from '../types';
declare const DEFAULT_USER_AGENT = "NekosbestSDK/0.0.1";
declare function fetcher(ctx: Context, fullurl: string, fetchdef: Record<string, any>): Promise<Response | Error>;
export { fetcher, DEFAULT_USER_AGENT, };
