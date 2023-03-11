<? if (!$GLOBALS['USER']->IsAuthorized()): ?>
	<a class="btn btn-primary" href="/auth" role="button">Войти</a>
        <? else: ?>
          <div><a class="btn btn-primary" href="<? echo $APPLICATION->GetCurPageParam(
            "logout=yes&" . bitrix_sessid_get(),
            array(
              "login",
              "logout",
              "register",
              "forgot_password",
              "change_password"
            )
          ); ?>" role="button">Выйти</a>
			</div>
 <? endif; ?>