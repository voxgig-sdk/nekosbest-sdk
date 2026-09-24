"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NekosbestError = void 0;
class NekosbestError extends Error {
    isNekosbestError = true;
    sdk = 'Nekosbest';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NekosbestError = NekosbestError;
//# sourceMappingURL=NekosbestError.js.map