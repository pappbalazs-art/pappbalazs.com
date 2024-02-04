<?php

namespace RestServer\Auth;

class HTTPAuthServer implements \RestServer\AuthServer
{
    public function isAuthorized($classObj)
    {
        if (method_exists($classObj, "authorize")) {
            return $classObj->authorize();
        }

        return true;
    }

    public function unauthorized($classObj)
    {
        throw new \RestServer\RestException(401, "You are not authorized to access this resource.");
    }
}