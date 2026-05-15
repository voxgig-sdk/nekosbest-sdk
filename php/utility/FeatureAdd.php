<?php
declare(strict_types=1);

// Nekosbest SDK utility: feature_add

class NekosbestFeatureAdd
{
    public static function call(NekosbestContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
