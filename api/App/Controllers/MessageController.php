<?php

use RestServer\RestException;
use RestServer\Utils\EmailClient;

class MessageController
{
    /**
     * Send a message to my personal email address.
     * 
     * @url POST /message
     * @noAuth
     */
    public function send()
    {
        if (!$_POST) {
            throw new RestException(400, "The given parameters are missing!");
        }

        if (array_diff(["name", "email", "subject", "message"], array_keys($_POST))) {
            throw new RestException(400, "There are some parameters that are missing!");
        }

        $emailClient = new EmailClient();
        $emailClient->setSenderName($_POST["name"]);
        $emailClient->setSenderEmail($_POST["email"]);
        $emailClient->setSubject($_POST["subject"]);
        $emailClient->setMessage($_POST["message"]);

        if ($emailClient->send()) {
            return [
                "message" => "The email was sent successfully!"
            ];
        }

        throw new RestException(500, "There were some error at sending the email!");
    }
}