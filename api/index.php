<?php

require(__DIR__ . "/RestServer/Utils/DotEnv.php");

(new RestServer\Utils\DotEnv(__DIR__ . "/.env"))->load();

require(__DIR__ . "/App/App.php");