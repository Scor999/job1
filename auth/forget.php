<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Восстановления пароля");
?><div class="site-section border-bottom">
        <div class="container">
<?$APPLICATION->IncludeComponent(
	"bitrix:system.auth.forgotpasswd",
	"",
	Array(
		"FORGOT_PASSWORD_URL" => "",
		"PROFILE_URL" => "",
		"REGISTER_URL" => "",
		"SHOW_ERRORS" => "N"
	)
);?>
</div>
</div><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>