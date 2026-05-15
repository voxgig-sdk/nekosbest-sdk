<?php
declare(strict_types=1);

// Nekosbest SDK utility: result_headers

class NekosbestResultHeaders
{
    public static function call(NekosbestContext $ctx): ?NekosbestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
