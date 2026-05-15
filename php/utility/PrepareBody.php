<?php
declare(strict_types=1);

// Nekosbest SDK utility: prepare_body

class NekosbestPrepareBody
{
    public static function call(NekosbestContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
