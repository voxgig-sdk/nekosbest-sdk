import { ImageEntity } from './entity/ImageEntity';
import { RandomByCategoryEntity } from './entity/RandomByCategoryEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './NekosbestTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NekosbestEntityBase } from './NekosbestEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class NekosbestSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Image(entopts?: Record<string, any>): ImageEntity;
    RandomByCategory(entopts?: Record<string, any>): RandomByCategoryEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): NekosbestSDK;
    tester(testopts?: any, sdkopts?: any): NekosbestSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof NekosbestSDK;
export { stdutil, config, BaseFeature, NekosbestEntityBase, NekosbestSDK, SDK, };
export type { DirectResult };
