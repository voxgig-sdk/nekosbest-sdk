import { NekosbestEntityBase } from '../NekosbestEntityBase';
import type { NekosbestSDK } from '../NekosbestSDK';
import type { Control } from '../types';
import type { GetRandomByCategory, GetRandomByCategoryListMatch } from '../NekosbestTypes';
declare class GetRandomByCategoryEntity extends NekosbestEntityBase<GetRandomByCategory> {
    constructor(client: NekosbestSDK, entopts: any);
    make(this: GetRandomByCategoryEntity): GetRandomByCategoryEntity;
    list(this: any, reqmatch?: GetRandomByCategoryListMatch, ctrl?: Control): Promise<GetRandomByCategoryEntity[]>;
}
export { GetRandomByCategoryEntity };
