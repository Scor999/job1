<?$APPLICATION->IncludeComponent("bitrix:catalog.filter", "Filter", array(
	"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"FIELD_CODE" => array(
			0 => "",
			1 => "",
		),
		"FILTER_NAME" => "arrFilter",
		"IBLOCK_ID" => "5",
		"IBLOCK_TYPE" => "advertisement",
		"LIST_HEIGHT" => "5",
		"NUMBER_WIDTH" => "5",
		"PAGER_PARAMS_NAME" => "arrPager",
		"PREFILTER_NAME" => "preFilter",
		"PRICE_CODE" => array(
			0 => "ATT_BAFROOMS",
			1 => "ATT_FLOORS",
			2 => "ATT_SQUARE",
			3 => "ATT_PRICE",
		),
		"PROPERTY_CODE" => array(
			0 => "ATT_GARAGE",
			1 => "ATT_SOURCE",
			2 => "ATT_BAFROOMS",
			3 => "ATT_FLOORS",
			4 => "ATT_SQUARE",
			5 => "ATT_DEAL",
			6 => "ATT_PRICE",
			7 => "",
		),
		"SAVE_IN_SESSION" => "N",
		"TEXT_WIDTH" => "20",
		"COMPONENT_TEMPLATE" => "Filter"
	),
	false,
	array(
	"ACTIVE_COMPONENT" => "Y"
	)
);?>