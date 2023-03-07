<?
if($INCLUDE_FROM_CACHE!='Y')return false;
$datecreate = '001678131468';
$dateexpire = '001678135068';
$ser_content = 'a:2:{s:7:"CONTENT";s:0:"";s:4:"VARS";a:2:{s:5:"count";i:1;s:6:"query1";s:347:"if(CModule::IncludeModule("iblock"))
{
$arFilter = ["IBLOCK_ID" => 5, "PROPERTY_ATT_GARAGE_VALUE" => "Да"];
$res = CIBlockElement::GetList(Array(), $arFilter, false);

while($ob = $res->GetNextElement())
{
$arFields = $ob->GetFields();

echo $arFields[\'ID\'];
echo "</br>";
echo $arFields[\'CODE\'];
echo "</br>";
	//var_dump($res->Fetch());
}
};  ";}}';
return true;
?>