<?php
   //$json = $_POST["json"];
   $readFile = file_get_contents('../requests/categories.json');
   echo $readFile;
   //$json = $fileRead.$_POST["json"];
   /*
   $fileDecode = json_decode($json, true);
   foreach ($json as $key => $value) {
   	 $value.name;
   }
   $file = fopen('../requests/temp.json','w+');
   $info = json_encode($json,JSON_UNESCAPED_SLASHES);
   fwrite($file, $info);
   fclose($file);*/
   ?>