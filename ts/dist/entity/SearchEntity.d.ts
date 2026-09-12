import { NekosbestEntityBase } from '../NekosbestEntityBase';
import type { NekosbestSDK } from '../NekosbestSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../NekosbestTypes';
declare class SearchEntity extends NekosbestEntityBase<Search> {
    constructor(client: NekosbestSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
