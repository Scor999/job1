<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
  die(); ?>
<?
IncludeTemplateLangFile(__FILE__);
?>
<?
  use Bitrix\Main\Page\Asset;
  // для css-файлов
  Asset::getInstance()->addString('<link rel="shortcut icon" type="image x-icon" href="/favicon.ico">');
  Asset::getInstance()->addString('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900|Roboto+Mono:300,400,500">');
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/fonts/icomoon/style.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/bootstrap.min.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/magnific-popup.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/jquery-ui.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/owl.carousel.min.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/owl.theme.default.min.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/bootstrap-datepicker.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/mediaelementplayer.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/animate.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/fonts/flaticon/font/flaticon.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/fl-bigmug-line.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/aos.css");
  Asset::getInstance()->addCss(SITE_TEMPLATE_PATH ."/css/style.css");



  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/jquery-3.3.1.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/jquery-migrate-3.0.1.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/jquery-ui.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/popper.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/bootstrap.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/owl.carousel.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/mediaelement-and-player.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/jquery.stellar.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/jquery.countdown.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/jquery.magnific-popup.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/bootstrap-datepicker.min.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/aos.js");
  Asset::getInstance()->addJs(SITE_TEMPLATE_PATH ."/js/main.js");
  ?>

<html lang="<?= LANGUAGE_ID ?>">
<head>
    <title><?$APPLICATION->ShowTitle()?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?$APPLICATION->ShowHead();?>
    <link rel="stylesheet" href="/local/templates/home/template_style.css">
</head>

<body>
<?$APPLICATION->ShowPanel();?>
<div class="site-loader"></div>

<div class="site-wrap">

    <div class="site-mobile-menu">
        <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
            </div>
        </div>
        <div class="site-mobile-menu-body"></div>
    </div> <!-- .site-mobile-menu -->

     <div class="border-bottom bg-white top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-md-6">
            <p class="mb-0">
				<div class="d-none d-md-inline-block ml-2">
                        <? $APPLICATION->IncludeComponent(
	                        "bitrix:main.include",
	                        "",
	                        array(
		                           "AREA_FILE_SHOW" => "file",
		                           "AREA_FILE_SUFFIX" => "inc",
		                           "EDIT_TEMPLATE" => "",
		                           "PATH" => "/local/templates/home/include/phone.php",
		                           ),
	                    ); ?>
                             </div>
				<div class="d-none d-md-inline-block ml-2">
					   <? $APPLICATION->IncludeComponent(
                               "bitrix:main.include",
                               "",
                               array(
                                       "AREA_FILE_SHOW" => "file",
                                       "AREA_FILE_SUFFIX" => "inc",
                                       "EDIT_TEMPLATE" => "",
                                       "PATH" => "/local/templates/home/include/email.php",
                                        ),
                            ); ?>

				</div>
				</p>
          </div>
          <div class="col-6 col-md-6 text-right">
					  <? $APPLICATION->IncludeComponent(
	             "bitrix:main.include",
                 "",
	             array(
		                "AREA_FILE_SHOW" => "file",
	                    "AREA_FILE_SUFFIX" => "inc",
		                "EDIT_TEMPLATE" => "",
	                    "PATH" => "/local/templates/home/include/linksociale.php",
	                                                            	),
	         ); ?>
			</div>
          </div>
<div class="d-none d-md-inline-block ml-2">
<? $APPLICATION->IncludeComponent(
	             "bitrix:main.include",
                 "",
	             array(
		                "AREA_FILE_SHOW" => "file",
	                    "AREA_FILE_SUFFIX" => "inc",
		                "EDIT_TEMPLATE" => "",
	                    "PATH" => "/local/templates/home/include/logout.php",
	                                                            	),
	         ); ?>

        </div>
		</div>

	 <div class="site-navbar">
      <div class="container py-1">
        <div class="row align-items-center">
          <div class="col-8 col-md-8 col-lg-4">
            <? $APPLICATION->IncludeComponent(
              "bitrix:main.include",
              "",
              array(
                "AREA_FILE_SHOW" => "file",
                "AREA_FILE_SUFFIX" => "inc",
                "EDIT_TEMPLATE" => "",
                "PATH" =>"/local/templates/home/include/logo.php"
              )
            ); ?>
          </div>
    <div class="col-4 col-md-4 col-lg-8">
            <? $APPLICATION->IncludeComponent(
	            "bitrix:menu",
	            "top_multi",
	             array(
		               "ALLOW_MULTI_SELECT" => "N",
		               "CHILD_MENU_TYPE" => "left",
		               "DELAY" => "N",
		               "MAX_LEVEL" => "3",
		               "MENU_CACHE_GET_VARS" => array(
		                ),
		                "MENU_CACHE_TIME" => "36000",
		                "MENU_CACHE_TYPE" => "A",
                        "MENU_CACHE_USE_GROUPS" => "Y",
                        "ROOT_MENU_TYPE" => "top",
                        "USE_EXT" => "N",
                        "COMPONENT_TEMPLATE" => "top_multi",
                        "MENU_THEME" => "site"
	                    ),
	            false
                ); ?>
           </div>
        </div>
      </div>
    </div>
  </div>

  <? if ($APPLICATION->GetCurPage(false) !== '/'): ?>
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(/local/templates/home/images/hero_bg_2.jpg);" data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-10">
            <h1 class="mb-2"><? $APPLICATION->ShowTitle(false) ?></h1>
            <? $APPLICATION->IncludeComponent(
            "bitrix:breadcrumb",
            "nav",
                    array(
                            "PATH" => "",
                            "SITE_ID" => "s1",
                            "START_FROM" => "0",
                            "COMPONENT_TEMPLATE" => "nav"
	                        ),
                            false,
                            array(
                            "ACTIVE_COMPONENT" => "Y"
                            )
                        ); ?>
          </div>
        </div>
      </div>
    </div>
  <? endif; ?>