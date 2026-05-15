<?php
declare(strict_types=1);

// Nekosbest SDK exists test

require_once __DIR__ . '/../nekosbest_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = NekosbestSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
