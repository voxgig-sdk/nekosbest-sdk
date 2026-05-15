<?php
declare(strict_types=1);

// Nekosbest SDK base feature

class NekosbestBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(NekosbestContext $ctx, array $options): void {}
    public function PostConstruct(NekosbestContext $ctx): void {}
    public function PostConstructEntity(NekosbestContext $ctx): void {}
    public function SetData(NekosbestContext $ctx): void {}
    public function GetData(NekosbestContext $ctx): void {}
    public function GetMatch(NekosbestContext $ctx): void {}
    public function SetMatch(NekosbestContext $ctx): void {}
    public function PrePoint(NekosbestContext $ctx): void {}
    public function PreSpec(NekosbestContext $ctx): void {}
    public function PreRequest(NekosbestContext $ctx): void {}
    public function PreResponse(NekosbestContext $ctx): void {}
    public function PreResult(NekosbestContext $ctx): void {}
    public function PreDone(NekosbestContext $ctx): void {}
    public function PreUnexpected(NekosbestContext $ctx): void {}
}
