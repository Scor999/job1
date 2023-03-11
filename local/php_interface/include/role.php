<?php

AddEventHandler("main", "OnBeforeUserRegister", ["role", "BeforeUserRegister"]);

class role
{
    public static function BeforeUserRegister(&$arFields)
    {
        if (isset($arFields['UF_USER_TYPE'])) {
            $arFields["GROUP_ID"][] = $arFields['UF_USER_TYPE'] == 1 ? 7 : 6;
        }
    }
}
