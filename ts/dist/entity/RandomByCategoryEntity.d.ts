import { NekosbestEntityBase } from '../NekosbestEntityBase';
import type { NekosbestSDK } from '../NekosbestSDK';
import type { Control } from '../types';
import type { RandomByCategory, RandomByCategoryListMatch } from '../NekosbestTypes';
declare class RandomByCategoryEntity extends NekosbestEntityBase<RandomByCategory> {
    constructor(client: NekosbestSDK, entopts: any);
    make(this: RandomByCategoryEntity): RandomByCategoryEntity;
    list(this: any, reqmatch?: RandomByCategoryListMatch, ctrl?: Control): Promise<RandomByCategoryEntity[]>;
}
export { RandomByCategoryEntity };
