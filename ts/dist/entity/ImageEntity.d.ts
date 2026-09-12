import { NekosbestEntityBase } from '../NekosbestEntityBase';
import type { NekosbestSDK } from '../NekosbestSDK';
import type { Control } from '../types';
import type { Image, ImageLoadMatch, ImageListMatch } from '../NekosbestTypes';
declare class ImageEntity extends NekosbestEntityBase<Image> {
    constructor(client: NekosbestSDK, entopts: any);
    make(this: ImageEntity): ImageEntity;
    load(this: any, reqmatch?: ImageLoadMatch, ctrl?: Control): Promise<ImageEntity>;
    list(this: any, reqmatch?: ImageListMatch, ctrl?: Control): Promise<ImageEntity[]>;
}
export { ImageEntity };
