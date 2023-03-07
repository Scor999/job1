<?
IncludeModuleLangFile(__FILE__);
Class mcart_companynews extends CModule
{
	const MODULE_ID = 'mcart.companynews';
	var $MODULE_ID = 'mcart.companynews'; 
	var $MODULE_VERSION;
	var $MODULE_VERSION_DATE;
	var $MODULE_NAME;
	var $MODULE_DESCRIPTION;
	var $MODULE_CSS;
	var $strError = '';

	function __construct()
	{
		$arModuleVersion = array();
		include(dirname(__FILE__)."/version.php");
		$this->MODULE_VERSION = $arModuleVersion["VERSION"];
		$this->MODULE_VERSION_DATE = $arModuleVersion["VERSION_DATE"];
		$this->MODULE_NAME = GetMessage("mcart.companynews_MODULE_NAME");
		$this->MODULE_DESCRIPTION = GetMessage("mcart.companynews_MODULE_DESC");

		$this->PARTNER_NAME = GetMessage("mcart.companynews_PARTNER_NAME");
		$this->PARTNER_URI = GetMessage("mcart.companynews_PARTNER_URI");
	}

	function InstallDB($arParams = array())
	{
            //Create Iblock And create iblock properties
                if(CModule::IncludeModule("iblock"))
                {
                    $dbIblockType=CIBlockType::GetList(
                        Array("SORT"=>"ASC"),
                        Array("ID"=>"news")
                       );
                    $iblockTypeID=0;
                    if($arIblockType=$dbIblockType->Fetch())
                    {
                        $iblockTypeID=$arIblockType["ID"];
                    }
                    
                    if(!$iblockTypeID)
                    {
                        $obBlocktype = new CIBlockType;
                        $res = $obBlocktype->Add(
                                array(
                                    'ID'=>'news',
                                    'SECTIONS'=>'Y',
                                    'IN_RSS'=>'N',
                                    'SORT'=>1000,
                                    'LANG'=>Array(
                                        'en'=>Array(
                                                'NAME'=>'News',
                                                'SECTION_NAME'=>'Sections',
                                                'ELEMENT_NAME'=>'Elements'
                                                )
                                            ),
                                        'ru'=>Array(
                                                    'NAME'=>GetMessage("IBLOCK_TYPE_NAME"),
                                                    'SECTION_NAME'=>GetMessage("IBLOCK_TYPE_SECTION_NAME"),
                                                    'ELEMENT_NAME'=>GetMessage("IBLOCK_TYPE_ELEMENTS_NAME")
                                                    )
                                    )
                        );
                        if(!$res)
                        {
                            echo $obBlocktype->LAST_ERROR;
                        }
                    }
                    $ib = new CIBlock;
                    $ID = $ib->Add(
                            array(
                                "ACTIVE" => "Y",
                                "NAME" => GetMessage("IBLOCK_NAME"),
                                "CODE" => "news",
                                "LIST_PAGE_URL" => "#SITE_DIR#/news/",
                                "SECTION_PAGE_URL"=>"#SITE_DIR#/news/#SECTION_CODE#/",
                                "DETAIL_PAGE_URL" => "#SITE_DIR#/news/#ELEMENT_CODE#/",
                                "IBLOCK_TYPE_ID" => "news",
                                "SORT" => 1000,
                                "PICTURE" => false,
                                "DESCRIPTION" => false,
                                "DESCRIPTION_TYPE" => 'text',
                                "GROUP_ID" => Array("2"=>"R"),
                                "SITE_ID"=>array('s1')
                            )
                            );
                    if($ID>0)
                    {
                        $ibp = new CIBlockProperty;
                        $ibp->Add(
                                array(
                                    "NAME" => "PHOTOGALLERY",
                                    "ACTIVE" => "Y",
                                    "SORT" => "100",
                                    "CODE" => "PHOTOGALLERY",
                                    "PROPERTY_TYPE" => "E",
                                    "IBLOCK_ID" => $ID,
                                    "MULTIPLE"=>"Y"
                                )
                                );
                        $ibp->Add(
                                array(
                                    "NAME" => "LIKE",
                                    "ACTIVE" => "Y",
                                    "SORT" => "200",
                                    "CODE" => "LIKE",
                                    "PROPERTY_TYPE" => "S",
                                    "IBLOCK_ID" => $ID,
                                    "USER_TYPE"=>"UserID",
                                    "MULTIPLE"=>"Y"
                                )
                                );
                        $ibp->Add(
                                array(
                                    "NAME" => "DISLIKE",
                                    "ACTIVE" => "Y",
                                    "SORT" => "200",
                                    "CODE" => "DISLIKE",
                                    "PROPERTY_TYPE" => "S",
                                    "IBLOCK_ID" => $ID,
                                    "USER_TYPE"=>"UserID",
                                    "MULTIPLE"=>"Y"
                                )
                                );
                    }
                    else
                    {
                        echo $ib->LAST_ERROR;
                    }
                }
		return true;
	}

	function UnInstallDB($arParams = array())
	{
		return true;
	}

	function InstallFiles($arParams = array())
	{
		if (is_dir($p = $_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.self::MODULE_ID.'/install/templates'))
		{
			if ($dir = opendir($p))
			{
				while (false !== $item = readdir($dir))
				{
					if ($item == '..' || $item == '.')
						continue;
					CopyDirFiles($p.'/'.$item, $_SERVER['DOCUMENT_ROOT'].'/bitrix/templates/'.$item, $ReWrite = True, $Recursive = True);
				}
				closedir($dir);
			}
		}
                if (is_dir($p = $_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.self::MODULE_ID.'/install/components'))
		{
			if ($dir = opendir($p))
			{
				while (false !== $item = readdir($dir))
				{
					if ($item == '..' || $item == '.')
						continue;
					CopyDirFiles($p.'/'.$item, $_SERVER['DOCUMENT_ROOT'].'/bitrix/components/'.$item, $ReWrite = True, $Recursive = True);
				}
				closedir($dir);
			}
		}
		return true;
	}

	function UnInstallFiles()
	{
		if (is_dir($_SERVER['DOCUMENT_ROOT'].'/bitrix/templates/.default/components/bitrix/system.pagenavigation/mcart'))
		{
                    DeleteDirFilesEx('/bitrix/templates/.default/components/bitrix/system.pagenavigation/mcart');
		}
                if (is_dir($_SERVER['DOCUMENT_ROOT'].'/bitrix/templates/.default/components/bitrix/news/mcart'))
		{
                    DeleteDirFilesEx('/bitrix/templates/.default/components/bitrix/news/mcart');
		}
                if (is_dir($_SERVER['DOCUMENT_ROOT'].'/bitrix/components/mcart/mcart.iblockelement.like'))
		{
                    DeleteDirFilesEx('/bitrix/components/mcart/mcart.iblockelement.like');
		}
                if (is_dir($_SERVER['DOCUMENT_ROOT'].'/bitrix/templates/.default/js'))
		{
                    DeleteDirFiles(
                            $_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/'.self::MODULE_ID.'/install/templates/.default/js',
                            $_SERVER['DOCUMENT_ROOT'].'/bitrix/templates/.default/js',
                            array('jquery.min.js')
                            );
		}
		return true;
	}

	function DoInstall()
	{
		global $APPLICATION;
		$this->InstallFiles();
		$this->InstallDB();
		RegisterModule(self::MODULE_ID);
	}

	function DoUninstall()
	{
		global $APPLICATION;
		UnRegisterModule(self::MODULE_ID);
		$this->UnInstallDB();
		$this->UnInstallFiles();
	}
}
?>
