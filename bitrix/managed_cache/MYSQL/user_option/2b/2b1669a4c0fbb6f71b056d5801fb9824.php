<?
if($INCLUDE_FROM_CACHE!='Y')return false;
$datecreate = '001678268335';
$dateexpire = '001678271935';
$ser_content = 'a:2:{s:7:"CONTENT";s:0:"";s:4:"VARS";a:2:{s:5:"count";i:1;s:6:"query1";s:509:"if(CModule::IncludeModule("iblock"))
{
//ID, Название, ID инфоблока, свойство - цена, приоритетная сделка, гараж.
$selectedFields = ["ID", "NAME", "IBLOCK_ID", "PROPERTY_ATT_PRICE", "PROPERTY_ATT_DEAL"];
$arFilter = ["IBLOCK_ID" => 5, "ACTIVE"=>"Y", "PROPERTY_ATT_GARAGE_VALUE" => "да"];
$res = CIBlockElement::GetList([], $arFilter, false, false, $selectedFields);
$resArr = [];

while($item = $res->fetch()) {
$resArr[] = $item;
}

print_r($resArr);
}  ";}}';
return true;
?>