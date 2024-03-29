<?php

namespace RestServer;

class RestFormat
{
    const PLAIN = "text/plain";
    const HTML = "text/html";
    const JSON = "application/json";
    const XML = "application/xml";

    static public $formats = array(
        "plain" => RestFormat::PLAIN,
        "txt" => RestFormat::PLAIN,
        "html" => RestFormat::HTML,
        "json" => RestFormat::JSON,
        "xml" => RestFormat::XML
    );
}