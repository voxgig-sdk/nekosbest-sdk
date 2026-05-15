<?php
declare(strict_types=1);

// Nekosbest SDK utility: result_body

class NekosbestResultBody
{
    public static function call(NekosbestContext $ctx): ?NekosbestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
