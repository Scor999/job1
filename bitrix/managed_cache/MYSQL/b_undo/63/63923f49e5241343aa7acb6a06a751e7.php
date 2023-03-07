<?
if($INCLUDE_FROM_CACHE!='Y')return false;
$datecreate = '001678129899';
$dateexpire = '001678302699';
$ser_content = 'a:2:{s:7:"CONTENT";s:0:"";s:4:"VARS";a:1:{s:33:"275797019ceda53d4dc62b600a32adda7";a:1:{i:1;a:7:{s:2:"ID";s:33:"275797019ceda53d4dc62b600a32adda7";s:9:"MODULE_ID";s:4:"main";s:9:"UNDO_TYPE";s:8:"autosave";s:12:"UNDO_HANDLER";s:19:"CAutoSave::_Restore";s:7:"CONTENT";s:947:"a:13:{s:7:"logical";s:0:"";s:6:"filter";s:1:"Y";s:10:"set_filter";s:1:"Y";s:4:"site";s:2:"s1";s:4:"path";s:20:"/o-servise/index.php";s:4:"save";s:0:"";s:8:"full_src";s:1:"Y";s:8:"template";s:0:"";s:8:"back_url";s:0:"";s:7:"filesrc";s:625:"<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("О сервисе");
?>
    <div class="site-section border-bottom">
        <div class="container">
            <?$APPLICATION->IncludeComponent(
                "bitrix:main.include",
                "",
                Array(
                    "AREA_FILE_SHOW" => "file",
                    "AREA_FILE_SUFFIX" => "inc",
                    "EDIT_TEMPLATE" => "",
                    "PATH" => "/include/about.php"
                )
            );?>
        </div>
    </div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>";s:5:"apply";s:0:"";s:6:"cancel";s:0:"";s:21:"tabControl_active_tab";s:5:"edit1";}";s:7:"USER_ID";s:1:"1";s:11:"TIMESTAMP_X";s:10:"1678095121";}}}}';
return true;
?>