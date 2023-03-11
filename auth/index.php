<?
define("NEED_AUTH", true);
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

if (is_string($_REQUEST["backurl"]) && mb_strpos($_REQUEST["backurl"], "/") === 0) {
  LocalRedirect($_REQUEST["backurl"]);
}

$APPLICATION->SetTitle("Вход на сайт");
?>	
<div class="site-section border-bottom">
        <div class="container">
	<p>Вы зарегистрированы и успешно авторизовались.</p>
<a class="btn btn-primary" href="<?= SITE_DIR ?>" role="button">Вернуться на главную страницу</a>
		</div>
	</div>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>