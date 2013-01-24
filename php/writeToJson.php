<?php
   $json = $_POST["json"];
   $info = JSONEncoder($json,JSON_UNESCAPED_SLASHES);
   $file = fopen('../requests/categories.json','w+');
   fwrite($file, $info);
   fclose($file);
?>