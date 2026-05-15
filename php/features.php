<?php
declare(strict_types=1);

// Nekosbest SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class NekosbestFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new NekosbestBaseFeature();
            case "test":
                return new NekosbestTestFeature();
            default:
                return new NekosbestBaseFeature();
        }
    }
}
