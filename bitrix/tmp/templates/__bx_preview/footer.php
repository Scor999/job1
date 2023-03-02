<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<? IncludeTemplateLangFile(__FILE__); ?>

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="mb-5">
                    <?$APPLICATION->IncludeComponent(
                        "bitrix:main.include",
                        "",
                        Array(
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "inc",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "local/templates/home/include/ABOUT HOMESPACE.php"
                        )
                    );?>
                </div>



            </div>
            <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="row mb-5">
                    <div class="col-md-12">
                        <h3 class="footer-heading mb-4">Navigations</h3>
                    </div>

                    <div class="col-md-6 col-lg-6">
                        <?$APPLICATION->IncludeComponent(
	"bitrix:menu", 
	"store_v3_bottom", 
	array(
		"ALLOW_MULTI_SELECT" => "N",
		"CHILD_MENU_TYPE" => "top",
		"DELAY" => "N",
		"MAX_LEVEL" => "1",
		"MENU_CACHE_GET_VARS" => array(
		),
		"MENU_CACHE_TIME" => "36000",
		"MENU_CACHE_TYPE" => "A",
		"MENU_CACHE_USE_GROUPS" => "Y",
		"ROOT_MENU_TYPE" => "top",
		"USE_EXT" => "Y",
		"COMPONENT_TEMPLATE" => "store_v3_bottom"
	),
	false
);?>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mb-5 mb-lg-0">
                <?$APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    Array(
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "inc",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "local/templates/home/include/socialfooter.php"
                    )
                );?>
            </div>

        </div>
        <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
                <?$APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    Array(
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "inc",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "local/templates/home/include/Copyright.php"
                    )
                );?>
            </div>

        </div>
    </div>
</footer>

</div>
</body>

</html>