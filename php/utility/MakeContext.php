<?php
declare(strict_types=1);

// Nekosbest SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class NekosbestMakeContext
{
    public static function call(array $ctxmap, ?NekosbestContext $basectx): NekosbestContext
    {
        return new NekosbestContext($ctxmap, $basectx);
    }
}
